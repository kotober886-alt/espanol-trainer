#!/usr/bin/env python3
"""
Audit and clean chroma-key backgrounds from backpack/trophy assets.

Detection is conservative:
- strict chroma: G > 180, R < 80, B < 80
- cleanup only affects green regions connected to the image border
- a broader connected mask catches WebP compression variants
- a 2 px alpha/green despill removes edge fringe

Changed WebP files are saved as RGBA WebP at quality 88.
PNG inputs are supported and retain RGBA PNG encoding.
"""

from __future__ import annotations

import argparse
import json
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

STRICT_R_MAX = 80
STRICT_G_MIN = 180
STRICT_B_MAX = 80

BROAD_R_MAX = 135
BROAD_G_MIN = 125
BROAD_B_MAX = 135
BROAD_DOMINANCE = 55

SAVE_QUALITY = 88


def chroma_masks(rgba: np.ndarray):
    rgb = rgba[..., :3].astype(np.int16)
    alpha = rgba[..., 3]
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]

    strict = (
        (alpha > 8)
        & (g > STRICT_G_MIN)
        & (r < STRICT_R_MAX)
        & (b < STRICT_B_MAX)
    )
    broad = (
        (alpha > 8)
        & (g > BROAD_G_MIN)
        & (r < BROAD_R_MAX)
        & (b < BROAD_B_MAX)
        & ((g - np.maximum(r, b)) > BROAD_DOMINANCE)
    )
    return strict, broad


def border_connected(strict: np.ndarray, broad: np.ndarray) -> np.ndarray:
    h, w = strict.shape
    connected = np.zeros((h, w), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def seed(y: int, x: int):
        if strict[y, x] and not connected[y, x]:
            connected[y, x] = True
            queue.append((y, x))

    for x in range(w):
        seed(0, x)
        if h > 1:
            seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        if w > 1:
            seed(y, w - 1)

    while queue:
        y, x = queue.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and broad[ny, nx] and not connected[ny, nx]:
                connected[ny, nx] = True
                queue.append((ny, nx))
    return connected


def dilate(mask: np.ndarray, size: int) -> np.ndarray:
    image = Image.fromarray((mask.astype(np.uint8) * 255), mode="L")
    return np.asarray(image.filter(ImageFilter.MaxFilter(size))) > 0


def cleanup_rgba(rgba: np.ndarray, mask: np.ndarray) -> np.ndarray:
    out = rgba.copy()
    alpha = out[..., 3].astype(np.float32)
    rgb = out[..., :3].astype(np.int16)

    # Fully remove the connected chroma background.
    alpha[mask] = 0

    ring1 = dilate(mask, 3) & ~mask
    ring2 = dilate(mask, 5) & ~dilate(mask, 3)

    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    dominance = g - np.maximum(r, b)
    greenish = (g > 95) & (dominance > 22)

    for ring, max_alpha_scale, despill_pad in (
        (ring1, 0.18, 6),
        (ring2, 0.55, 10),
    ):
        fringe = ring & greenish & (alpha > 0)
        if not np.any(fringe):
            continue
        strength = np.clip((dominance.astype(np.float32) - 20.0) / 120.0, 0.0, 1.0)
        scale = 1.0 - strength * (1.0 - max_alpha_scale)
        alpha[fringe] *= scale[fringe]
        neutral_green = np.maximum(r, b) + despill_pad
        rgb[..., 1][fringe] = np.minimum(g[fringe], neutral_green[fringe])

    out[..., :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    out[..., 3] = np.clip(alpha, 0, 255).astype(np.uint8)

    # RGB below fully transparent alpha is irrelevant; zeroing avoids hidden green residue.
    out[..., :3][out[..., 3] == 0] = 0
    return out


def border_opaque_ratio(alpha: np.ndarray) -> float:
    h, w = alpha.shape
    border = np.concatenate([alpha[0, :], alpha[h - 1, :], alpha[:, 0], alpha[:, w - 1]])
    return float(np.count_nonzero(border > 16) / max(1, border.size))


def asset_stats(path: Path):
    with Image.open(path) as im:
        rgba = np.asarray(im.convert("RGBA"), dtype=np.uint8)
    strict, broad = chroma_masks(rgba)
    connected = border_connected(strict, broad)
    total = rgba.shape[0] * rgba.shape[1]
    alpha = rgba[..., 3]
    return {
        "width": int(rgba.shape[1]),
        "height": int(rgba.shape[0]),
        "strict_chroma": int(strict.sum()),
        "connected_chroma": int(connected.sum()),
        "connected_ratio": float(connected.sum() / max(1, total)),
        "transparent_ratio": float(np.count_nonzero(alpha < 16) / max(1, total)),
        "border_opaque_ratio": border_opaque_ratio(alpha),
        "rgba": rgba,
        "connected_mask": connected,
    }


def should_clean(stats: dict) -> bool:
    pixels = stats["width"] * stats["height"]
    connected = stats["connected_chroma"]
    strict = stats["strict_chroma"]
    return connected >= max(24, int(pixels * 0.002)) and strict >= 12


def save_rgba(path: Path, rgba: np.ndarray):
    image = Image.fromarray(rgba, mode="RGBA")
    suffix = path.suffix.lower()
    if suffix == ".webp":
        image.save(path, "WEBP", quality=SAVE_QUALITY, method=6, lossless=False, exact=True)
    elif suffix == ".png":
        image.save(path, "PNG", optimize=True)
    else:
        raise ValueError(f"Unsupported extension: {path}")


def verify(path: Path, changed: bool) -> dict:
    with Image.open(path) as im:
        im.load()
        has_alpha = "A" in im.getbands()
        rgba = np.asarray(im.convert("RGBA"), dtype=np.uint8)
    strict, broad = chroma_masks(rgba)
    connected = border_connected(strict, broad)
    alpha = rgba[..., 3]
    remaining = int(np.count_nonzero(connected & (alpha > 16)))
    if changed and not has_alpha:
        raise RuntimeError(f"{path}: cleaned file lost alpha channel")
    if changed and remaining:
        raise RuntimeError(f"{path}: {remaining} border-connected chroma pixels remain after cleanup")
    return {
        "has_alpha": bool(has_alpha),
        "remaining_connected_chroma": remaining,
        "transparent_ratio": float(np.count_nonzero(alpha < 16) / max(1, alpha.size)),
        "border_opaque_ratio": border_opaque_ratio(alpha),
    }


def load_manifest_titles(manifest: Path) -> dict[str, dict]:
    if not manifest.exists():
        return {}
    text = manifest.read_text(encoding="utf-8")
    start = text.find("[")
    end = text.find("];", start)
    if start < 0 or end < 0:
        return {}
    items = json.loads(text[start:end + 1])
    return {
        Path(item["image"]).name: {
            "id": item["id"],
            "title": item.get("title", ""),
            "titleRu": item.get("titleRu", ""),
            "category": item.get("category", ""),
        }
        for item in items
    }


def checker_tile(size=(320, 320), cell=20):
    bg = Image.new("RGB", size, "white")
    draw = ImageDraw.Draw(bg)
    pale = (232, 232, 232)
    for y in range(0, size[1], cell):
        for x in range(0, size[0], cell):
            if ((x // cell) + (y // cell)) % 2:
                draw.rectangle((x, y, x + cell - 1, y + cell - 1), fill=pale)
    return bg


def make_contact_sheet(entries, output: Path, checker=False, columns=4):
    if not entries:
        return
    cell_w, cell_h = 300, 350
    rows = (len(entries) + columns - 1) // columns
    sheet = Image.new("RGB", (cell_w * columns, cell_h * rows), "white")
    font = ImageFont.load_default()

    for index, entry in enumerate(entries):
        x0 = (index % columns) * cell_w
        y0 = (index // columns) * cell_h
        stage = checker_tile((cell_w, 280), 18) if checker else Image.new("RGB", (cell_w, 280), "white")
        with Image.open(entry["path"]) as im:
            obj = im.convert("RGBA")
            obj.thumbnail((250, 245), Image.Resampling.LANCZOS)
        px = (cell_w - obj.width) // 2
        py = (260 - obj.height) // 2
        stage.paste(obj, (px, py), obj)
        sheet.paste(stage, (x0, y0))
        draw = ImageDraw.Draw(sheet)
        label = entry.get("titleRu") or entry["path"].name
        draw.text((x0 + 10, y0 + 288), label[:38], fill="black", font=font)
        draw.text((x0 + 10, y0 + 306), entry["path"].name[:42], fill="black", font=font)
        draw.text(
            (x0 + 10, y0 + 324),
            f"alpha={entry['transparent_ratio']:.1%} border={entry['border_opaque_ratio']:.1%}",
            fill="black",
            font=font,
        )
    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output, "PNG", optimize=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default="assets/images/backpack")
    parser.add_argument("--manifest", default="data/backpack-items.js")
    parser.add_argument("--report", default="backpack-chroma-report.json")
    parser.add_argument("--preview-dir", default="backpack-chroma-previews")
    args = parser.parse_args()

    root = Path(args.root)
    files = sorted(
        p for p in root.iterdir()
        if p.is_file() and p.suffix.lower() in {".webp", ".png"}
    )
    if not files:
        raise SystemExit(f"No PNG/WebP assets found in {root}")

    manifest = load_manifest_titles(Path(args.manifest))
    report = {
        "root": str(root),
        "scanned": len(files),
        "changed": [],
        "files": [],
    }

    preview_entries = []
    story_entries = []
    flagged_before = []

    for path in files:
        meta = manifest.get(path.name, {})
        before = asset_stats(path)
        clean = should_clean(before)

        if clean:
            # Capture a before-image for diagnostic preview.
            flagged_copy = Path(args.preview_dir) / "before" / path.name
            flagged_copy.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(path) as im:
                im.convert("RGBA").save(flagged_copy, "WEBP", quality=95, method=6, exact=True)
            flagged_before.append({
                "path": flagged_copy,
                "titleRu": meta.get("titleRu", path.name),
                "transparent_ratio": before["transparent_ratio"],
                "border_opaque_ratio": before["border_opaque_ratio"],
            })

            cleaned = cleanup_rgba(before["rgba"], before["connected_mask"])
            save_rgba(path, cleaned)
            report["changed"].append(str(path))

        after = verify(path, clean)
        entry = {
            "file": str(path),
            "referenced": path.name in manifest,
            "id": meta.get("id"),
            "title": meta.get("title"),
            "titleRu": meta.get("titleRu"),
            "category": meta.get("category"),
            "changed": clean,
            "before": {
                k: v for k, v in before.items()
                if k not in {"rgba", "connected_mask"}
            },
            "after": after,
        }
        report["files"].append(entry)

        preview_entry = {
            "path": path,
            "titleRu": meta.get("titleRu", path.name),
            "transparent_ratio": after["transparent_ratio"],
            "border_opaque_ratio": after["border_opaque_ratio"],
        }
        preview_entries.append(preview_entry)
        if meta.get("category") == "stories":
            story_entries.append(preview_entry)

    if len(story_entries) != 8:
        raise RuntimeError(f"Expected 8 'stories' backpack items, found {len(story_entries)}")

    preview_dir = Path(args.preview_dir)
    make_contact_sheet(story_entries, preview_dir / "stories_on_white.png", checker=False, columns=4)
    make_contact_sheet(story_entries, preview_dir / "stories_checkerboard.png", checker=True, columns=4)
    make_contact_sheet(preview_entries, preview_dir / "all_on_white.png", checker=False, columns=5)
    make_contact_sheet(preview_entries, preview_dir / "all_checkerboard.png", checker=True, columns=5)
    if flagged_before:
        make_contact_sheet(flagged_before, preview_dir / "flagged_before.png", checker=True, columns=4)
        flagged_after = [
            e for e in preview_entries
            if str(e["path"]) in report["changed"]
        ]
        make_contact_sheet(flagged_after, preview_dir / "flagged_after.png", checker=True, columns=4)

    Path(args.report).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Scanned {len(files)} backpack assets")
    print(f"Cleaned {len(report['changed'])}:")
    for changed in report["changed"]:
        print(f"  - {changed}")
    print(f"Verified 8 story assets and {len(files)} total PNG/WebP assets")
    print(f"Report: {args.report}")
    print(f"Previews: {args.preview_dir}")


if __name__ == "__main__":
    main()

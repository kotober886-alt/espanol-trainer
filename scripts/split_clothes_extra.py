from pathlib import Path

from PIL import Image, ImageChops, ImageFilter, ImageOps

SOURCE = Path("assets/picture-labels/study-clothes-extra-v1.webp")
OUTPUT_DIR = Path("assets/picture-labels/clothes-extra")

COLS = 6
ROWS = 3
OUTPUT_SIZE = 512
CONTENT_RATIO = 0.76
BACKGROUND_THRESHOLD = 14
CELL_INSET = 3
BBOX_MARGIN = 4

ITEMS = [
    ("ankleboots", 0, 0),
    ("heels", 1, 0),
    ("slippers", 2, 0),
    ("umbrella", 3, 0),
    ("handkerchief", 4, 0),
    ("necklace", 5, 0),
    ("bracelet", 0, 1),
    ("ring", 1, 1),
    ("earrings", 2, 1),
    ("watch", 3, 1),
    ("brooch", 4, 1),
    ("chain", 5, 1),
    ("beret", 0, 2),
    ("handbag", 1, 2),
    ("wallet", 2, 2),
    ("coinpurse", 3, 2),
    ("suitcase", 4, 2),
    ("waistbag", 5, 2),
]


def cell_box(width: int, height: int, col: int, row: int):
    """Return exact pixel boundaries for one grid cell."""
    if not (0 <= col < COLS and 0 <= row < ROWS):
        raise ValueError(f"Invalid grid position: col={col}, row={row}")

    x0 = round(col * width / COLS)
    x1 = round((col + 1) * width / COLS)
    y0 = round(row * height / ROWS)
    y1 = round((row + 1) * height / ROWS)

    # Pull a few pixels inward so compression/grid seams never leak
    # into the neighboring item's crop.
    x0 += CELL_INSET
    y0 += CELL_INSET
    x1 -= CELL_INSET
    y1 -= CELL_INSET

    if x1 <= x0 or y1 <= y0:
        raise RuntimeError((col, row, x0, y0, x1, y1))

    return (x0, y0, x1, y1)


def estimate_background(tile: Image.Image):
    rgb = tile.convert("RGB")
    w, h = rgb.size
    pixels = []

    for x in range(w):
        pixels.append(rgb.getpixel((x, 0)))
        pixels.append(rgb.getpixel((x, h - 1)))

    for y in range(h):
        pixels.append(rgb.getpixel((0, y)))
        pixels.append(rgb.getpixel((w - 1, y)))

    return tuple(
        sorted(pixel[channel] for pixel in pixels)[len(pixels) // 2]
        for channel in range(3)
    )


def find_foreground_bbox(tile: Image.Image):
    rgb = tile.convert("RGB")
    background_color = estimate_background(rgb)
    background = Image.new("RGB", rgb.size, background_color)
    diff = ImageChops.difference(rgb, background)

    mask = ImageOps.grayscale(diff)
    mask = mask.point(
        lambda value: 255 if value > BACKGROUND_THRESHOLD else 0
    )
    mask = mask.filter(ImageFilter.MedianFilter(size=3))

    bbox = mask.getbbox()
    if bbox is None:
        raise RuntimeError("No foreground found in cell")

    return bbox


def normalize_item(item: Image.Image):
    item = item.convert("RGB")
    max_content = round(OUTPUT_SIZE * CONTENT_RATIO)

    scale = min(
        max_content / item.width,
        max_content / item.height,
    )

    new_width = max(1, round(item.width * scale))
    new_height = max(1, round(item.height * scale))

    item = item.resize(
        (new_width, new_height),
        Image.Resampling.LANCZOS,
    )

    canvas = Image.new(
        "RGB",
        (OUTPUT_SIZE, OUTPUT_SIZE),
        (255, 255, 255),
    )

    x = (OUTPUT_SIZE - new_width) // 2
    y = (OUTPUT_SIZE - new_height) // 2
    canvas.paste(item, (x, y))

    return canvas


def main():
    if not SOURCE.exists():
        raise FileNotFoundError(SOURCE)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Remove stale generated files before rebuilding.
    for old_file in OUTPUT_DIR.glob("*.webp"):
        old_file.unlink()

    sprite = Image.open(SOURCE).convert("RGB")
    width, height = sprite.size

    print(f"Source: {SOURCE}")
    print(f"Sprite size: {width}x{height}")
    print(f"Grid: {COLS}x{ROWS}")

    expected_names = {name for name, _, _ in ITEMS}
    if len(expected_names) != COLS * ROWS:
        raise RuntimeError(
            f"ITEMS must contain exactly {COLS * ROWS} unique cells"
        )

    seen_cells = set()

    for name, col, row in ITEMS:
        if (col, row) in seen_cells:
            raise RuntimeError(f"Duplicate cell {(col, row)}")
        seen_cells.add((col, row))

        crop_box = cell_box(width, height, col, row)
        tile = sprite.crop(crop_box)

        # Hard guard: a cell must be a small fraction of the full sprite,
        # never the whole source image.
        if tile.width >= width // 2 or tile.height >= height // 2:
            raise RuntimeError(
                f"{name}: crop unexpectedly large: {tile.size}, box={crop_box}"
            )

        bbox = find_foreground_bbox(tile)
        bx0, by0, bx1, by1 = bbox

        bx0 = max(0, bx0 - BBOX_MARGIN)
        by0 = max(0, by0 - BBOX_MARGIN)
        bx1 = min(tile.width, bx1 + BBOX_MARGIN)
        by1 = min(tile.height, by1 + BBOX_MARGIN)

        item = tile.crop((bx0, by0, bx1, by1))

        # Another guard: foreground extraction must never expand outside
        # the already isolated single cell.
        if item.width > tile.width or item.height > tile.height:
            raise RuntimeError(f"{name}: item escaped cell bounds")

        result = normalize_item(item)

        output = OUTPUT_DIR / f"{name}.webp"
        result.save(output, "WEBP", quality=95, method=6)

        print(
            f"{name:14} "
            f"grid=({col},{row}) "
            f"crop={crop_box} "
            f"cell={tile.size} "
            f"bbox={bbox} "
            f"item={item.size} "
            f"-> {output}"
        )

    expected_files = {f"{name}.webp" for name, _, _ in ITEMS}
    actual_files = {path.name for path in OUTPUT_DIR.glob("*.webp")}

    if actual_files != expected_files:
        raise RuntimeError(
            f"Unexpected output set. "
            f"Missing={expected_files-actual_files}, "
            f"extra={actual_files-expected_files}"
        )

    for path in sorted(OUTPUT_DIR.glob("*.webp")):
        image = Image.open(path)
        image.load()

        if image.size != (OUTPUT_SIZE, OUTPUT_SIZE):
            raise RuntimeError(f"{path}: wrong size {image.size}")

    print(
        f"Done: {len(ITEMS)} single-item images "
        f"written to {OUTPUT_DIR}"
    )


if __name__ == "__main__":
    main()

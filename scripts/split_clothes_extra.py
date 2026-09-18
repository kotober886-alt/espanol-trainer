from pathlib import Path

from PIL import Image, ImageChops, ImageFilter, ImageOps

SOURCE = Path("assets/picture-labels/study-clothes-extra-v1.webp")
OUTPUT_DIR = Path("assets/picture-labels/clothes-extra")

COLS = 6
ROWS = 3
OUTPUT_SIZE = 512
CONTENT_RATIO = 0.76
BACKGROUND_THRESHOLD = 14
CELL_INSET = 2

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
        raise RuntimeError("Не удалось найти предмет внутри ячейки")

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

    sprite = Image.open(SOURCE).convert("RGB")
    width, height = sprite.size

    print(f"Source: {SOURCE}")
    print(f"Size: {width}x{height}")
    print(f"Grid: {COLS}x{ROWS}")

    for name, col, row in ITEMS:
        x0 = round(col * width / COLS)
        x1 = round((col + 1) * width / COLS)
        y0 = round(row * height / ROWS)
        y1 = round((row + 1) * height / ROWS)

        x0 += CELL_INSET
        y0 += CELL_INSET
        x1 -= CELL_INSET
        y1 -= CELL_INSET

        tile = sprite.crop((x0, y0, x1, y1))
        bbox = find_foreground_bbox(tile)

        bx0, by0, bx1, by1 = bbox
        margin = 4
        bx0 = max(0, bx0 - margin)
        by0 = max(0, by0 - margin)
        bx1 = min(tile.width, bx1 + margin)
        by1 = min(tile.height, by1 + margin)

        item = tile.crop((bx0, by0, bx1, by1))
        result = normalize_item(item)

        output = OUTPUT_DIR / f"{name}.webp"
        result.save(output, "WEBP", quality=95, method=6)

        print(
            f"{name:14} "
            f"cell={tile.size} "
            f"bbox={bbox} "
            f"item={item.size} "
            f"-> {output}"
        )

    expected = {f"{name}.webp" for name, _, _ in ITEMS}
    actual = {path.name for path in OUTPUT_DIR.glob("*.webp")}

    if actual != expected:
        raise RuntimeError(
            f"Unexpected output set. Missing={expected-actual}, extra={actual-expected}"
        )

    for path in sorted(OUTPUT_DIR.glob("*.webp")):
        image = Image.open(path)
        image.load()
        if image.size != (OUTPUT_SIZE, OUTPUT_SIZE):
            raise RuntimeError(f"{path}: wrong size {image.size}")

    print(f"Done: {len(ITEMS)} normalized images written to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()

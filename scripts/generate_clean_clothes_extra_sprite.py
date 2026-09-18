from pathlib import Path
import re

from PIL import Image, ImageChops, ImageFilter, ImageOps

INPUT_DIR = Path("assets/picture-labels/clothes-extra")
OUTPUT = Path("assets/picture-labels/study-clothes-extra-v2.webp")
SPRITE_JS = Path("assets/sprite-art.js")

# Match the working project sprite standard exactly:
# clothes-v3 = 2160x1800 = 6x5 cells of 360x360
# activities-v3 = 2520x2160 = 7x6 cells of 360x360
# foods-v3 = 2520x1800 = 7x5 cells of 360x360
COLS = 6
ROWS = 3
CELL_SIZE = 360
PADDING = 40
BACKGROUND_THRESHOLD = 12

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


def foreground_bbox(image: Image.Image):
    rgb = image.convert("RGB")
    white = Image.new("RGB", rgb.size, (255, 255, 255))
    diff = ImageChops.difference(rgb, white)
    mask = ImageOps.grayscale(diff)
    mask = mask.point(
        lambda value: 255 if value > BACKGROUND_THRESHOLD else 0
    )
    mask = mask.filter(ImageFilter.MedianFilter(size=3))

    bbox = mask.getbbox()
    if bbox is None:
        raise RuntimeError("No visible object found")

    return bbox


def make_standard_cell(source: Path):
    image = Image.open(source).convert("RGB")
    bbox = foreground_bbox(image)
    item = image.crop(bbox)

    max_content = CELL_SIZE - PADDING * 2  # 280 px
    scale = min(
        max_content / item.width,
        max_content / item.height,
    )

    size = (
        max(1, round(item.width * scale)),
        max(1, round(item.height * scale)),
    )

    item = item.resize(size, Image.Resampling.LANCZOS)

    cell = Image.new("RGB", (CELL_SIZE, CELL_SIZE), (255, 255, 255))
    x = (CELL_SIZE - item.width) // 2
    y = (CELL_SIZE - item.height) // 2
    cell.paste(item, (x, y))

    return cell, bbox, item.size


def update_sprite_config():
    text = SPRITE_JS.read_text(encoding="utf-8")

    source = '    clothesExtra: withVersion("assets/picture-labels/study-clothes-extra-v2.webp"),'
    if source not in text:
        # Replace any older clothesExtra sprite source if present.
        text, count = re.subn(
            r'    clothesExtra: withVersion\("assets/picture-labels/[^"]+"\),',
            source,
            text,
            count=1,
        )
        if count == 0:
            marker = '    clothesNew: withVersion("assets/picture-labels/study-clothes-new-v1.webp"),'
            if marker not in text:
                raise RuntimeError("SPRITE_IMAGES insertion point not found")
            text = text.replace(marker, source + "\n" + marker)

    map_line = (
        "    clothesExtra:{"
        "ankleboots:[0,0],heels:[1,0],slippers:[2,0],umbrella:[3,0],"
        "handkerchief:[4,0],necklace:[5,0],bracelet:[0,1],ring:[1,1],"
        "earrings:[2,1],watch:[3,1],brooch:[4,1],chain:[5,1],"
        "beret:[0,2],handbag:[1,2],wallet:[2,2],coinpurse:[3,2],"
        "suitcase:[4,2],waistbag:[5,2]},"
    )

    text, map_count = re.subn(
        r"    clothesExtra:\{[^\n]+\},",
        map_line,
        text,
        count=1,
    )
    if map_count == 0:
        marker = "    clothesNew:{"
        pos = text.find(marker)
        if pos < 0:
            raise RuntimeError("SPRITE_MAP insertion point not found")
        text = text[:pos] + map_line + "\n" + text[pos:]

    clothing_block = '''  window.clothingArt=function(id){
    return firstSprite([
      ["clothes","clothes",id,6,5],
      ["clothesExtra","clothesExtra",id,6,3],
      ["clothesNew","clothesNew",id,2,2]
    ]);
  };'''

    text, count = re.subn(
        r'  window\.clothingArt=function\(id\)\{.*?\n  \};',
        clothing_block,
        text,
        count=1,
        flags=re.S,
    )
    if count != 1:
        raise RuntimeError(f"Could not normalize clothingArt block: {count}")

    if "CLOTHES_EXTRA_IMAGES" in text or "clothesExtraArt" in text:
        raise RuntimeError("Legacy individual clothesExtra renderer remains")

    SPRITE_JS.write_text(text, encoding="utf-8")


def main():
    expected = {f"{name}.webp" for name, _, _ in ITEMS}
    actual = {path.name for path in INPUT_DIR.glob("*.webp")}

    if actual != expected:
        raise RuntimeError(
            f"Input set mismatch. Missing={expected-actual}, extra={actual-expected}"
        )

    sprite = Image.new(
        "RGB",
        (COLS * CELL_SIZE, ROWS * CELL_SIZE),
        (255, 255, 255),
    )

    seen = set()

    for name, col, row in ITEMS:
        if (col, row) in seen:
            raise RuntimeError(f"Duplicate cell {(col, row)}")
        seen.add((col, row))

        cell, bbox, item_size = make_standard_cell(
            INPUT_DIR / f"{name}.webp"
        )

        x = col * CELL_SIZE
        y = row * CELL_SIZE
        sprite.paste(cell, (x, y))

        print(
            f"{name:14} cell=({col},{row}) "
            f"source_bbox={bbox} normalized={item_size} paste=({x},{y})"
        )

    expected_size = (2160, 1080)
    if sprite.size != expected_size:
        raise RuntimeError(
            f"Unexpected sprite size {sprite.size}; expected {expected_size}"
        )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sprite.save(OUTPUT, "WEBP", quality=96, method=6)

    check = Image.open(OUTPUT)
    check.load()

    if check.size != expected_size:
        raise RuntimeError(
            f"Encoded sprite size {check.size}; expected {expected_size}"
        )

    update_sprite_config()

    print(f"Created {OUTPUT}: {check.size}, {OUTPUT.stat().st_size} bytes")
    print("Standard: 6x3 cells, exactly 360x360 each, padding=40 px")


if __name__ == "__main__":
    main()

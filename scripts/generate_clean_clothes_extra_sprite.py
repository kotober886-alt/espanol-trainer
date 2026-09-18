from pathlib import Path
import re

from PIL import Image, ImageChops, ImageFilter, ImageOps

INPUT_DIR = Path("assets/picture-labels/clothes-extra")
OUTPUT = Path("assets/picture-labels/study-clothes-extra-v2.webp")
SPRITE_JS = Path("assets/sprite-art.js")

COLS = 6
ROWS = 3
CELL_SIZE = 512
PADDING = 56
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


def make_clean_cell(source: Path):
    image = Image.open(source).convert("RGB")
    bbox = foreground_bbox(image)
    item = image.crop(bbox)

    max_size = CELL_SIZE - PADDING * 2
    scale = min(max_size / item.width, max_size / item.height)

    new_size = (
        max(1, round(item.width * scale)),
        max(1, round(item.height * scale)),
    )

    item = item.resize(new_size, Image.Resampling.LANCZOS)

    cell = Image.new("RGB", (CELL_SIZE, CELL_SIZE), (255, 255, 255))
    x = (CELL_SIZE - item.width) // 2
    y = (CELL_SIZE - item.height) // 2
    cell.paste(item, (x, y))

    return cell, bbox, item.size


def update_sprite_config():
    text = SPRITE_JS.read_text(encoding="utf-8")

    # Add the new clean sprite source.
    source_line = (
        '    clothesExtra: '
        'withVersion("assets/picture-labels/study-clothes-extra-v2.webp"),\n'
    )

    if "study-clothes-extra-v2.webp" not in text:
        marker = '    clothesNew: withVersion("assets/picture-labels/study-clothes-new-v1.webp"),\n'
        if marker not in text:
            raise RuntimeError("SPRITE_IMAGES insertion point not found")
        text = text.replace(marker, source_line + marker)

    map_line = (
        "    clothesExtra:{"
        "ankleboots:[0,0],heels:[1,0],slippers:[2,0],umbrella:[3,0],"
        "handkerchief:[4,0],necklace:[5,0],bracelet:[0,1],ring:[1,1],"
        "earrings:[2,1],watch:[3,1],brooch:[4,1],chain:[5,1],"
        "beret:[0,2],handbag:[1,2],wallet:[2,2],coinpurse:[3,2],"
        "suitcase:[4,2],waistbag:[5,2]},\n"
    )

    if "    clothesExtra:{" not in text:
        marker = "    clothesNew:{"
        index = text.find(marker)
        if index < 0:
            raise RuntimeError("SPRITE_MAP insertion point not found")
        text = text[:index] + map_line + text[index:]

    # Remove old per-file renderer and map.
    text = re.sub(
        r"\n  const CLOTHES_EXTRA_IMAGES=\{.*?\n  \};"
        r"\n\n  function clothesExtraArt\(id\)\{.*?\n  \}\n",
        "\n",
        text,
        flags=re.S,
    )

    old_clothing = re.compile(
        r'  window\.clothingArt=function\(id\)\{\n'
        r'    const extra=clothesExtraArt\(id\);\n'
        r'    if\(extra\) return extra;\n\n'
        r'    return firstSprite\(\[\n'
        r'      \["clothes","clothes",id,6,5\],\n'
        r'      \["clothesNew","clothesNew",id,2,2\]\n'
        r'    \]\);\n'
        r'  \};'
    )

    replacement = '''  window.clothingArt=function(id){
    return firstSprite([
      ["clothes","clothes",id,6,5],
      ["clothesExtra","clothesExtra",id,6,3],
      ["clothesNew","clothesNew",id,2,2]
    ]);
  };'''

    text, count = old_clothing.subn(replacement, text)
    if count != 1:
        raise RuntimeError(
            f"Expected to replace one clothingArt block, replaced {count}"
        )

    if "CLOTHES_EXTRA_IMAGES" in text or "clothesExtraArt" in text:
        raise RuntimeError("Old clothesExtra individual-image renderer remains")

    SPRITE_JS.write_text(text, encoding="utf-8")


def main():
    expected = {f"{name}.webp" for name, _, _ in ITEMS}
    actual = {path.name for path in INPUT_DIR.glob("*.webp")}

    if actual != expected:
        raise RuntimeError(
            f"Individual input set mismatch. "
            f"Missing={expected-actual}, extra={actual-expected}"
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

        source = INPUT_DIR / f"{name}.webp"
        cell, bbox, item_size = make_clean_cell(source)

        x = col * CELL_SIZE
        y = row * CELL_SIZE
        sprite.paste(cell, (x, y))

        print(
            f"{name:14} cell=({col},{row}) "
            f"source_bbox={bbox} normalized={item_size} "
            f"paste=({x},{y})"
        )

    if sprite.size != (3072, 1536):
        raise RuntimeError(f"Unexpected sprite size: {sprite.size}")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sprite.save(OUTPUT, "WEBP", quality=96, method=6)

    # Re-open to verify the encoded file is valid and exact.
    check = Image.open(OUTPUT)
    check.load()
    if check.size != (3072, 1536):
        raise RuntimeError(f"Encoded sprite size mismatch: {check.size}")

    update_sprite_config()

    print(f"Created {OUTPUT} ({OUTPUT.stat().st_size} bytes)")
    print("Updated assets/sprite-art.js to use clothesExtra 6x3 v2 sprite")


if __name__ == "__main__":
    main()

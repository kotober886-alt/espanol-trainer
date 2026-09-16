from pathlib import Path
import base64, io, re
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'assets'
VERSION = '5'


def extract_data_uri(path):
    text = path.read_text(encoding='utf-8')
    m = re.search(r'base64,([^\"]+)', text)
    if not m:
        raise RuntimeError(f'No base64 image in {path}')
    return base64.b64decode(m.group(1))


def source_bytes(kind):
    if kind == 'activities':
        parts = sorted(ASSETS.glob('source-activities.b64.part*'))
        if parts:
            return base64.b64decode(''.join(p.read_text(encoding='utf-8').strip() for p in parts))
    return extract_data_uri(ASSETS / f'img-{kind}.js')


def build(kind):
    raw = source_bytes(kind)
    img = Image.open(io.BytesIO(raw)).convert('RGB')
    big = img.resize((img.width * 3, img.height * 3), Image.Resampling.LANCZOS)
    big = big.filter(ImageFilter.UnsharpMask(radius=1.0, percent=90, threshold=4))
    out = ASSETS / f'generated-{kind}.webp'
    big.save(out, 'WEBP', quality=90, method=6)
    print(kind, img.size, '->', big.size, out.stat().st_size)


for kind in ('clothes', 'foods', 'activities'):
    build(kind)

runtime = ASSETS / 'generated-art.js'
s = runtime.read_text(encoding='utf-8')
s = re.sub(
    r"const IMG=\{.*?\};",
    "const IMG={clothes:'assets/generated-clothes.webp?v="+VERSION+"',foods:'assets/generated-foods.webp?v="+VERSION+"',activities:'assets/generated-activities.webp?v="+VERSION+"'};",
    s,
    count=1,
    flags=re.S,
)
runtime.write_text(s, encoding='utf-8')

index = ROOT / 'index.html'
s = index.read_text(encoding='utf-8')
for name in ('generated-art.css','img-clothes.js','img-foods.js','img-activities.js','generated-art.js'):
    s = re.sub(rf'(assets/{re.escape(name)})(?:\?v=\d+)?', rf'\1?v={VERSION}', s)
index.write_text(s, encoding='utf-8')

from pathlib import Path
from PIL import Image, ImageChops

SRC=Path("assets/generated/study-clothes-new-v1.webp")
OUT=Path("assets/generated/clothes-new-raster")
OUT.mkdir(parents=True, exist_ok=True)

names=[
    ("hoodie",0,0),
    ("vest",1,0),
    ("polo",0,1),
    ("cardigan",1,1),
]

im=Image.open(SRC).convert("RGB")
w,h=im.size
assert w%2==0 and h%2==0, im.size
cw,ch=w//2,h//2

def trim_white(tile):
    bg=Image.new("RGB",tile.size,(255,255,255))
    diff=ImageChops.difference(tile,bg).convert("L")
    # Ignore tiny JPEG/WebP noise around white.
    mask=diff.point(lambda p: 255 if p>12 else 0)
    box=mask.getbbox()
    if not box:
        raise RuntimeError("tile is blank")
    crop=tile.crop(box)
    # Put it on a clean square canvas with ~8% breathing room.
    side=max(crop.size)
    pad=max(28,round(side*0.08))
    canvas=Image.new("RGB",(side+2*pad,side+2*pad),(255,255,255))
    x=(canvas.width-crop.width)//2
    y=(canvas.height-crop.height)//2
    canvas.paste(crop,(x,y))
    return canvas

for name,x,y in names:
    tile=im.crop((x*cw,y*ch,(x+1)*cw,(y+1)*ch))
    out=trim_white(tile)
    out.save(OUT/f"{name}.webp","WEBP",quality=94,method=6)
    print(name, tile.size, "->", out.size)

print("source",im.size)

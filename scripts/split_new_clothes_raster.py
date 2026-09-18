from pathlib import Path
from PIL import Image, ImageChops

SRC=Path("assets/generated/study-clothes-new-v1.webp")
OUT=Path("assets/generated/clothes-new-raster")
RUNTIME=Path("assets/generated-art.js")
OUT.mkdir(parents=True, exist_ok=True)

items=[
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
    mask=diff.point(lambda p: 255 if p>12 else 0)
    box=mask.getbbox()
    if not box:
        raise RuntimeError("tile is blank")
    crop=tile.crop(box)
    side=max(crop.size)
    pad=max(28,round(side*0.08))
    canvas=Image.new("RGB",(side+2*pad,side+2*pad),(255,255,255))
    x=(canvas.width-crop.width)//2
    y=(canvas.height-crop.height)//2
    canvas.paste(crop,(x,y))
    return canvas

for name,x,y in items:
    tile=im.crop((x*cw,y*ch,(x+1)*cw,(y+1)*ch))
    out=trim_white(tile)
    out.save(OUT/f"{name}.webp","WEBP",quality=94,method=6)
    print(name, tile.size, "->", out.size)

s=RUNTIME.read_text(encoding="utf-8")
start=s.index("  window.clothingArt=function(kind){")
end=s.index("  window.activityArt=function(kind){",start)
block="""  window.clothingArt=function(kind){
    const directRaster={
      hoodie:"assets/generated/clothes-new-raster/hoodie.webp?v=20260918-raster1",
      vest:"assets/generated/clothes-new-raster/vest.webp?v=20260918-raster1",
      polo:"assets/generated/clothes-new-raster/polo.webp?v=20260918-raster1",
      cardigan:"assets/generated/clothes-new-raster/cardigan.webp?v=20260918-raster1"
    };
    if(directRaster[kind]){
      return '<img class="precise-art new-clothes-raster" src="'+directRaster[kind]+'" alt="" aria-hidden="true" loading="eager" decoding="async">';
    }
    return firstSprite([
      ["clothes","clothes",kind,6,5],
      ["clothesExtra","clothesExtra",kind,6,3]
    ]);
  };
"""
RUNTIME.write_text(s[:start]+block+s[end:],encoding="utf-8")
print("source",im.size)

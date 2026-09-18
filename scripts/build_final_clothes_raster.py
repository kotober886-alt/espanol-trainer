from pathlib import Path
import base64, hashlib
from PIL import Image, ImageChops, ImageStat

STAGE=Path("assets/generated/stage-clothes-final")
OUT=Path("assets/generated/clothes-new-final")
RUNTIME=Path("assets/generated-art.js")
SPRITE=Path("assets/generated/study-clothes-final.webp")
OUT.mkdir(parents=True, exist_ok=True)

parts=sorted(STAGE.glob("part*.b64"))
if not parts:
    raise SystemExit("no staged parts")
encoded="".join(p.read_text(encoding="utf-8").strip() for p in parts)
raw=base64.b64decode(encoded, validate=True)
print("decoded bytes",len(raw),"sha256",hashlib.sha256(raw).hexdigest())
SPRITE.write_bytes(raw)

im=Image.open(SPRITE)
im.load()
im=im.convert("RGB")
print("sprite",im.size,ImageStat.Stat(im).var)
if im.width < 800 or im.height < 800:
    raise RuntimeError(("sprite too small",im.size))
w,h=im.size
cw,ch=w//2,h//2

items=[
    ("hoodie",0,0),
    ("vest",1,0),
    ("polo",0,1),
    ("cardigan",1,1),
]

def trim_white(tile):
    bg=Image.new("RGB",tile.size,(255,255,255))
    diff=ImageChops.difference(tile,bg).convert("L")
    mask=diff.point(lambda p:255 if p>10 else 0)
    box=mask.getbbox()
    if not box:
        raise RuntimeError("blank tile")
    crop=tile.crop(box)
    side=max(crop.size)
    pad=max(28,round(side*.07))
    canvas=Image.new("RGB",(side+2*pad,side+2*pad),(255,255,255))
    canvas.paste(crop,((canvas.width-crop.width)//2,(canvas.height-crop.height)//2))
    return canvas

for name,x,y in items:
    tile=im.crop((x*cw,y*ch,(x+1)*cw,(y+1)*ch))
    out=trim_white(tile)
    path=OUT/f"{name}.webp"
    out.save(path,"WEBP",quality=92,method=6)
    check=Image.open(path); check.load(); rgb=check.convert("RGB")
    var=ImageStat.Stat(rgb).var
    if min(check.size)<300 or max(var)<100:
        raise RuntimeError((name,check.size,var))
    print("VALID",name,check.size,path.stat().st_size,var)

s=RUNTIME.read_text(encoding="utf-8")
start=s.index("  window.clothingArt=function(kind){")
end=s.index("  window.activityArt=function(kind){",start)
block="""  window.clothingArt=function(kind){
    const directRaster={
      hoodie:"assets/generated/clothes-new-final/hoodie.webp?v=20260918-final-raster3",
      vest:"assets/generated/clothes-new-final/vest.webp?v=20260918-final-raster3",
      polo:"assets/generated/clothes-new-final/polo.webp?v=20260918-final-raster3",
      cardigan:"assets/generated/clothes-new-final/cardigan.webp?v=20260918-final-raster3"
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

import json, re
from pathlib import Path

text = Path('index.html').read_text(encoding='utf-8')

def block(start, end):
    a = text.find(start)
    b = text.find(end, a + 1) if a >= 0 else -1
    return text[a:b if b >= 0 else None] if a >= 0 else ''

def ids_and_art(src):
    out=[]
    # object literals with id + art
    for m in re.finditer(r'id:\s*"([^"]+)"[\s\S]{0,900}?art:\s*"([^"]+)"', src):
        item=(m.group(1),m.group(2))
        if item not in out: out.append(item)
    # helper calls where id and art are positional
    for m in re.finditer(r'(?:clothingWord|activityPhrase)\(\s*"([^"]+)"[\s\S]{0,420}?\]\s*,\s*"([^"]+)"\s*,', src):
        item=(m.group(1),m.group(2))
        if item not in out: out.append(item)
    return [{'id':a,'art':b} for a,b in out]

foods = ids_and_art(block('const FOOD_WORDS = [','function clothingWord'))
clothes = ids_and_art(block('const CLOTHING_WORDS = [','const ACTIVITY_CATEGORIES'))
activities = ids_and_art(block('const ACTIVITY_WORDS = [','const BUILTIN = ['))

picture_src = block('function pictureLabelExercises()','function normalizePictureAnswer')
pictures=[]
for m in re.finditer(r'item\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]*)"\s*,\s*"([^"]+)"', picture_src):
    rec={'id':m.group(1),'topic':m.group(2),'question':m.group(3),'scene':m.group(4)}
    if rec not in pictures: pictures.append(rec)

manifest={'foods':foods,'clothes':clothes,'activities':activities,'pictures':pictures}
Path('asset-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({k:len(v) for k,v in manifest.items()},ensure_ascii=False))

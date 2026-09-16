from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')
version = '13'

css = f'<link rel="stylesheet" href="assets/generated-art.css?v={version}">'
s = re.sub(r'<link rel="stylesheet" href="assets/generated-art\.css(?:\?v=\d+)?">', css, s)
if css not in s:
    s = s.replace('</head>', css + '\n</head>')

# Do not load the temporary vector replacements from v12. The approved raster
# sprite sheets remain the visual source; ambiguous/missing art is hidden.
s = re.sub(r'\s*<script src="assets/study-art-fixes\.js(?:\?v=\d+)?"></script>', '', s)

names = ['hq-clothes-row1.js','img-clothes.js','img-foods.js','img-activities.js','generated-art.js','visual-coverage.js','exercise-quality-fixes.js','trainer-v13-fixes.js']
for name in names:
    tag = f'<script src="assets/{name}?v={version}"></script>'
    pattern = rf'<script src="assets/{re.escape(name)}(?:\?v=\d+)?"></script>'
    if re.search(pattern, s):
        s = re.sub(pattern, tag, s)
    else:
        anchor = '<script src="assets/img-clothes.js'
        if name == 'hq-clothes-row1.js' and anchor in s:
            idx = s.index(anchor)
            s = s[:idx] + tag + '\n' + s[idx:]
        else:
            s = s.replace('</body>', tag + '\n</body>')

p.write_text(s, encoding='utf-8')

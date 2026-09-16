from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')
version = '12'

css = f'<link rel="stylesheet" href="assets/generated-art.css?v={version}">'
s = re.sub(r'<link rel="stylesheet" href="assets/generated-art\.css(?:\?v=\d+)?">', css, s)
if css not in s:
    s = s.replace('</head>', css + '\n</head>')

names = ['hq-clothes-row1.js','img-clothes.js','img-foods.js','img-activities.js','generated-art.js','visual-coverage.js','exercise-quality-fixes.js','study-art-fixes.js']
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

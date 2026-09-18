from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')
version = '20260918-runtime1'

css = f'<link rel="stylesheet" href="assets/generated-art.css?v={version}">'
s = re.sub(
    r'<link rel="stylesheet" href="assets/generated-art\.css(?:\?v=[^"]+)?">',
    css,
    s
)
if css not in s:
    s = s.replace('</head>', css + '\n</head>')

# Approved generated assets only; remove obsolete study-art override if present.
s = re.sub(
    r'\s*<script src="assets/study-art-fixes\.js(?:\?v=[^"]+)?"></script>',
    '',
    s
)

names = [
    'generated-art.js',
    'hq-clothes-row1.js',
    'img-clothes.js',
    'img-foods.js',
    'img-activities.js',
    'visual-coverage.js',
    'exercise-quality-fixes.js',
    'trainer-v13-fixes.js',
]

# Remove every existing occurrence first, regardless of cache-key format.
for name in names:
    pattern = rf'\s*<script src="assets/{re.escape(name)}(?:\?v=[^"]+)?"></script>'
    s = re.sub(pattern, '', s)

block = '\n'.join(
    f'  <script src="assets/{name}?v={version}"></script>'
    for name in names
) + '\n'

# Keep outfit task overrides after the common runtime stack.
anchor = re.search(
    r'\s*<script src="assets/outfit-approved-tasks\.js(?:\?v=[^"]+)?"></script>',
    s
)
if anchor:
    pos = anchor.start()
    s = s[:pos] + '\n' + block + s[pos:]
else:
    s = s.replace('</body>', block + '</body>')

# Tidy excessive blank lines caused by removing duplicate tags.
s = re.sub(r'\n{3,}', '\n\n', s)
p.write_text(s, encoding='utf-8')

from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

css = '<link rel="stylesheet" href="assets/generated-art.css">'
scripts = [
    '<script src="assets/img-clothes.js"></script>',
    '<script src="assets/img-foods.js"></script>',
    '<script src="assets/img-activities.js"></script>',
    '<script src="assets/generated-art.js"></script>',
]

if css not in s:
    s = s.replace('</head>', css + '\n</head>')

missing = [tag for tag in scripts if tag not in s]
if missing:
    s = s.replace('</body>', '\n'.join(missing) + '\n</body>')

p.write_text(s, encoding='utf-8')

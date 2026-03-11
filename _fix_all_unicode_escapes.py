import re, codecs, os

root = os.path.join(os.path.dirname(__file__), 'src')
extensions = ('.js', '.jsx', '.ts', '.tsx', '.css', '.json', '.html')
pattern = re.compile(r'(?:\\u[0-9a-fA-F]{4})+')

modified = []

for dirpath, dirnames, filenames in os.walk(root):
    for fn in filenames:
        if not fn.endswith(extensions):
            continue
        path = os.path.join(dirpath, fn)
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
        matches = list(pattern.finditer(text))
        if not matches:
            continue
        new_text = text
        # replace from end to start to preserve offsets
        for m in reversed(matches):
            seq = m.group(0)
            try:
                dec = codecs.decode(seq, 'unicode_escape')
            except Exception:
                dec = seq
            new_text = new_text[:m.start()] + dec + new_text[m.end():]
        if new_text != text:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_text)
            modified.append((path, len(matches)))

print('Modified files:')
for p,c in modified:
    print(f"{p}: {c} replacements")
print(f"Total files modified: {len(modified)}")

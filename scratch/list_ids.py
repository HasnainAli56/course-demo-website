import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

# match "id": "something"
ids = re.findall(r'"id":\s*"([^"]+)"', text)
print("ALL IDS:")
for idx, cid in enumerate(ids):
    print(f"{idx}: {cid}")

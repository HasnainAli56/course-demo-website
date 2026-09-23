import json
import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

# search for dsa or data structures
pattern = r'\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"'
matches = re.findall(r'"id":\s*"([^"]+)"', text)
for cid in matches:
    if 'dsa' in cid.lower() or 'algo' in cid.lower() or 'structure' in cid.lower():
        print(f"Match ID: {cid}")

start = text.find('"id": "dsa-algo"')
if start != -1:
    print("Found dsa-algo!")
    print(text[start:start+500])

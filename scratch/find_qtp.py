import json
import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

# find all objects with id and title
pattern = r'\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"'
matches = re.findall(pattern, text)
print(f"Total courses found: {len(matches)}")
for cid, ctitle in matches:
    if any(k in ctitle.lower() or k in cid.lower() for k in ['qtp', 'uft', 'quick', 'functional']):
        print(f"ID: {cid} | Title: {ctitle}")

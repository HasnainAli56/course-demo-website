import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

# find index of "id": "qtp-uft-training"
start = text.find('"id": "qtp-uft-training"')
if start == -1:
    start = text.find("'id': 'qtp-uft-training'")

print(f"Start pos: {start}")
print(text[start:start+1500])

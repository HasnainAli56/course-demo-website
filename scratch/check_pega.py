import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = '"id": "pega-developer"'
pos = text.find(target)
if pos != -1:
    print("Found at pos", pos)
    print(text[pos:pos+400])
else:
    print("Not found")

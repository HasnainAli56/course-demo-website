import json

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('"id": "selenium-certification"')
if start != -1:
    print("Found selenium-certification!")
    print(text[start:start+500])
else:
    print("Not found!")

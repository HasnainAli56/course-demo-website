import json

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('"id": "fullstack-python"')
if start != -1:
    print("Found fullstack-python!")
    print(text[start:start+500])
else:
    print("Not found!")

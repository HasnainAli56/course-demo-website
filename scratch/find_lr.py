import json

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('"id": "loadrunner-course"')
if start != -1:
    print("Found loadrunner-course!")
    print(text[start:start+500])
else:
    print("Not found!")

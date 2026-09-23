import json
import re

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Parse courses using regex or JS evaluation via node

const fs = require('fs');

const coursesText = fs.readFileSync('src/data/courses.js', 'utf8');

const match = coursesText.match(/export const COURSES = (\[[\s\S]*\]);/);
if (!match) {
  console.log("Could not find COURSES array!");
  process.exit(1);
}

let courses;
try {
  courses = eval(match[1]);
  console.log(`Successfully parsed ${courses.length} courses.`);
} catch (e) {
  console.error("Eval error parsing COURSES:", e);
  process.exit(1);
}

courses.forEach((c) => {
  const types = {};
  for (const k in c) {
    if (typeof c[k] === 'object' && c[k] !== null) {
      types[k] = Array.isArray(c[k]) ? 'array' : 'object';
    } else {
      types[k] = typeof c[k];
    }
  }
  console.log(`Course [${c.id}]:`, JSON.stringify(types));
});

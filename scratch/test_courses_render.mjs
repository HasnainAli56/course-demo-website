import { COURSES } from '../src/data/courses.js';

console.log(`Auditing ${COURSES.length} courses:`);

COURSES.forEach((c) => {
  const types = {};
  for (const k in c) {
    if (typeof c[k] === 'object' && c[k] !== null) {
      types[k] = Array.isArray(c[k]) ? `array(${c[k].length})` : 'object';
    } else {
      types[k] = typeof c[k];
    }
  }
  console.log(`Course [${c.id}]:`, JSON.stringify(types));
});

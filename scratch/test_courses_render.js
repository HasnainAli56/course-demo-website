const fs = require('fs');

const coursesText = fs.readFileSync('src/data/courses.js', 'utf8');

// Extract COURSES array text
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

// Inspect fields in all courses
courses.forEach((c, idx) => {
  const issues = [];
  
  // Check introductionOverview
  if (c.introductionOverview) {
    if (typeof c.introductionOverview !== 'string' && !Array.isArray(c.introductionOverview) && typeof c.introductionOverview !== 'object') {
      issues.push(`introductionOverview is invalid type: ${typeof c.introductionOverview}`);
    }
  }

  // Check projectScenarios
  if (c.projectScenarios) {
    if (typeof c.projectScenarios !== 'string' && !Array.isArray(c.projectScenarios) && typeof c.projectScenarios !== 'object') {
      issues.push(`projectScenarios is invalid type: ${typeof c.projectScenarios}`);
    }
  }

  // Check learningRoadmap
  if (c.learningRoadmap) {
    if (!Array.isArray(c.learningRoadmap) && typeof c.learningRoadmap !== 'object') {
      issues.push(`learningRoadmap is invalid type: ${typeof c.learningRoadmap}`);
    }
  }

  // Check courseHighlights
  if (c.courseHighlights) {
    if (!Array.isArray(c.courseHighlights) && typeof c.courseHighlights !== 'object') {
      issues.push(`courseHighlights is invalid type: ${typeof c.courseHighlights}`);
    }
  }

  // Check learningMethodology
  if (c.learningMethodology) {
    if (!Array.isArray(c.learningMethodology) && typeof c.learningMethodology !== 'object') {
      issues.push(`learningMethodology is invalid type: ${typeof c.learningMethodology}`);
    }
  }

  if (issues.length > 0) {
    console.log(`Course [${c.id}] has issues:`, issues);
  }
});

console.log("Audit complete.");

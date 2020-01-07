// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Job", "Job");
assertEqual(1,1);
assertEqual(4, 7);
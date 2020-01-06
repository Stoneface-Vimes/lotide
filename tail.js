const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(list) {
  return list.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test Case: a 1 element array should return an empty array for its tail
assertEqual(tail([5]), []);

//Test Case: an empty array should return an empty array
assertEqual(tail([]), []);
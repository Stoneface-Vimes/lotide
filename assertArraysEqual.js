const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {

  if (actual.length === 0 && expected.length === 0){ //Checks if both parameters are empty arrays
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);

  } else if (actual.length === expected.length){
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]) {
        console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
        break;
      } else if (i === actual.length - 1){
        console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
      }
    }
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual(['1', 2, '3'], ['1', 2, '3']);
// assertArraysEqual(['1', 2, '3'], ['1', '2', '3']);

module.exports = assertArraysEqual;
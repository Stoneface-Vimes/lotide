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

const eqArrays = function(actual, expected) {

  if (actual.length === 0 && expected.length === 0){
    return true;
  } 
  if (actual.length === expected.length){
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]) {
        return false;
      } else if (i === actual.length - 1){
        return true;
      }
    }
  } else {
    return false;
  }
};

const flatten = function(arr) {
  let result = [];
  for (i of arr){
    if (Array.isArray(i) === true){
      for (element of i){
        result.push(element);
      }
    } else {
      result.push(i);
    }
  }
  return result;
}

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
// assertArraysEqual(flatten([1, 'b', [3, 'r'], 5, [true]]), [1, 'b', 3, 'r', 5, true]);
// assertArraysEqual(flatten([1, 2, [undefined, 4], null, [6]]), [1, 2, undefined, 4, null, 6]);
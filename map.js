const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length){
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

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(words, word => word[1]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
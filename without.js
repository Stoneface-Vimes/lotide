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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++){
    result.push(source[i]);
    for (let x = 0; x < itemsToRemove.length; x++){
      if (source[i] === itemsToRemove[x]){
        result.pop();
      }
    }
  }

  return result; 
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// assertArraysEqual(without([], []), [1]); //False
// assertArraysEqual(without([1], []), [1]); //True
// assertArraysEqual(without([1, 2], [3]), [1 ,2]); //False
// assertArraysEqual(without([1, 2, 3], [2, 6]), [1, 3]); //True
// assertArraysEqual(without([1, 2, 3, 4, 5], [1]), [2, 3, 4, 5]); //False
// assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]); //True
// assertArraysEqual(without([1, 2, 3, 4, 5, 6], [1,4]), [2, 3, 5, 6]); //False
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

const middle = function(arr) {
  if (arr.length <= 2){
    return [];
  } else {
    if (arr.length % 2 === 0){
      //arr.length / 2 will give the index of the mid-high number
      //since length will be last index position + 1
      let midHigh = arr[arr.length / 2]; 
      let midLow = arr[(arr.length / 2) - 1];
      return [midLow, midHigh];
    } else {
      let mid = arr[Math.floor(arr.length / 2)];
      return [mid];
    }
  }
}
assertArraysEqual(middle([1]), []); //True
assertArraysEqual(middle([1, 2]), [3]); //False
assertArraysEqual(middle([1, 2, 3]), [2]); //True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1]); //False
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1,4]); //False
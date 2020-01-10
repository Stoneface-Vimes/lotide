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

const takeUntil = function(array, callback){
  let temp = [];
  for (let x of array){
    if (callback(x)) {
      break;
    } else {
      temp.push(x);
    }
  }
  return temp
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2,]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
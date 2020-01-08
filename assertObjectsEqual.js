const eqObjects = function (object1, object2) {
  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2) 
  if ((keys1.length) !== (keys2.length)) {
    return false;
  } else {
    for (element of keys1){
      if (Array.isArray(object1[element])) {
        if (! eqArrays(object1[element], object2[element])) {
          return false;
        }
      } else if (object1[element] !== object2[element]) { //This check must happen second, as [] !=== []
        return false;
      } 
    }
    return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2714 \u2714 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let a = {a: 1, b: 2, c: [1, 2, 3]};
let b = {c: [1, 2, 3], b: 2, a: 1};
let c = {c: [1, 2, 3]};
assertObjectsEqual(a, b);
assertObjectsEqual(a, c);
assertObjectsEqual(b, c);
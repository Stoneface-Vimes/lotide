// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

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

// TEST CODE
// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']),true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

module.exports = eqArrays;
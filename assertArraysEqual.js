const eqArrays = function(actual, expected) {

  if (actual.length === expected.length){
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]) {
        console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
      } else if (i === actual.length - 1){
        console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
      }
    }
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }

};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 4]);
eqArrays(['1', 2, '3'], ['1', 2, '3']);
eqArrays(['1', 2, '3'], ['1', '2', '3']);
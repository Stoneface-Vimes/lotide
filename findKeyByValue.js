const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, givenValue) {
  
  let temp = Object.entries(obj); //sets temp to an array of obj's key/value pairs
    for ([key, value] of temp){ //iterates through temp with an array element
      if (givenValue === value) {
        return key;
      }
    }
    return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// //Should Pass
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Deep Space Nine'), undefined);
// //Should Fail
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'Deep Space Nine'), 'sci_fi');
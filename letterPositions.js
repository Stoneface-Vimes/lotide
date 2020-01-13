//Will loop through a string and return an object that contains:
//Every letter in the string as a key
//# of times the letter occurred and the index positions where they occurred

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

const letterPostions = function(scentence) {
  let results = {};
  let itter = 0;
  for (element of scentence.toLowerCase()){ //Converts the given string to lowercase
    if (element !== ' '){
      if (!results[element]){ //If the element does not exist in the results object
        results[element] = {'count' : 1, 'index' : [itter]}
      } else {
        results[element]['count'] +=  1;
        results[element]['index'].push(itter);
      }
      itter++;
      
    }
  }
  //console.log(results);
  return results;
};

const testString = 'Lighthouse in the house';
//console.log(letterPostions(testString));
// assertArraysEqual(letterPostions('hello'), {h : {'count': 1, 'index': [ 0 ] },
// e : {'count': 1, 'index': [ 1 ] },
// l : {'count': 1, 'index': [ 2, 3 ] },
// o : {'count': 1, 'index': [ 4 ] }
// // })
// assertArraysEqual(letterPostions('hello').e.index, [1]);
// assertArraysEqual(letterPostions('hello').l.index, [2, 3]);
// assertArraysEqual(letterPostions('hello').o.index, [4]);
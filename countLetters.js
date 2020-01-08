const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {} //Keys = letter in str : Values = number of times keys appears in string
  for (element of str) { //Loops through each char of str as if it was an array
     if (element !== ' '){ //checks if element is a blank space
      if (count[element]){
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  }
  return count;
}

const test = 'abcaabbcc';

console.log(countLetters(test));
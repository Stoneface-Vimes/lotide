// Takes an array, and returns a new array starting from index 1 of the original array

const assertEqual = require('./assertEqual');

const tail = function(list) {
  return list.slice(1);
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// //Test Case: check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

module.exports = tail;
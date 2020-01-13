
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []); //True
assertArraysEqual(middle([1, 2]), [3]); //False
assertArraysEqual(middle([1, 2, 3]), [2]); //True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1]); //False
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1,4]); //False
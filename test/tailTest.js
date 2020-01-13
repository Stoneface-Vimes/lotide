
const tail = require('../tail.js');
const assertEqual =require ('../assertEqual');

//Test Case: check the original array
const nums = [1, 2, 3, 4];
assertEqual(tail(nums).length, 3);

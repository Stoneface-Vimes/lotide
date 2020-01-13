# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stoneface-vimes/lotide`

**Require it:**

`const _ = require('@stoneface-vimes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `head`: takes in an array and returns the first value
* `tail`: takes an array and returns an array without the first value
* `middle`: takes an array and sorts it and returns the value in the middle, if even it will return the two middle values
* `assertArrayEqual`: Test Case, compares two arrays and returns true if they are the same
* `assertEqual`: Test case, compares two primitive data types and reuturns true if they are the same
* `assertObjectsEqual`:Test case, compares two objects and returns true if they are the same
* `countLetters`: counts the amount of times each letter occurs in a string
* `countOnly`: given an array and a value, returns how many times that value occurs
* `eqArrays`: given two arrays, compares them and returns true if they are the same
* `eqObjects`: given two objects, compares them and returns true if they are the same
* `findKey `: given an object and a value in a callback, returns the key the given value is attached to
* `findKeyByValue `: given an object and value, returns the key the given value is attached to
* `flatten`: Takes a nested array and returns one array.
* `letterPositions `: will return all the indices (zero-based positions) in the string where each character is found
* `map`: map function will return a new array based on the results of the callback function
* `takeUntil`: Creates a slice of array with elements taken from the beginning. Continues until the callback returns a truthy value.
* `without`: without function should be returning a new array and not modify the original array that is passed in
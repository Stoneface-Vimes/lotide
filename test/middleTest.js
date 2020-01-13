const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns true when checking [1] against []', () => {
    assert.deepEqual(middle([1]), []);
  })
  it('returns false when checking [1, 2] against []', () => {
    assert.notDeepEqual(middle([1],2), [3]);
  })
  it('returns true when checking [1, 2, 3] against [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
  it('returns false when checking [1, 2, 3, 4, 5] against [1]', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5]), [1]);
  })
  it('returns true when checking [1, 2, 3, 4] against [2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  it('returns false when checking [1, 2, 3, 4, 5, 6] against [1, 4]', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6,]), [1, 4]);
  })
})


// assertArraysEqual(middle([1]), []); //True
// assertArraysEqual(middle([1, 2]), [3]); //False
// assertArraysEqual(middle([1, 2, 3]), [2]); //True
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [1]); //False
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //True
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1,4]); //False
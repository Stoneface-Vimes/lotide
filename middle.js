const middle = function(arr) {
  if (arr.length <= 2){
    return [];
  } else {
    if (arr.length % 2 === 0){
      //arr.length / 2 will give the index of the mid-high number
      //since length will be last index position + 1
      let midHigh = arr[arr.length / 2]; 
      let midLow = arr[(arr.length / 2) - 1];
      return [midLow, midHigh];
    } else {
      let mid = arr[Math.floor(arr.length / 2)];
      return [mid];
    }
  }
}

module.exports = middle;
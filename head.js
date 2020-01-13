// const assertEqual = require('./assertEqual');

const head = function(list){
  if (list === []){
    return undefined
  } else {
  return list[0];
  }
}

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([87]), 87);
// assertEqual(head([]), 56);

module.exports = head
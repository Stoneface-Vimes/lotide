const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(list){
  if (list === []){
    return undefined
  } else {
  return list[0];
  }
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([87]), 87);
assertEqual(head([]), 56);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let results = {};
  for (const item of allItems){//Loops through the array of allItems
    if (itemsToCount[item]){ //Checks to see if the current value of the array is
      //present in the object itemsToCount
      if (results[item]){
        results[item] += 1;
      } else {
      results[item] = 1;
      }
  }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, { 'Jason': true, 'Karima' : true, 'Fang': true});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
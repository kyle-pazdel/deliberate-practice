// Reduce an array to a single value based on some computation

//  1. Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

const arr1 = [5, 10, 8, 3];
var sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

//  2. Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

const arr2 = ["volleyball", "basketball", "badminton"];
var combined = "";
for (let i = 0; i < arr2.length; i++) {
  combined += arr2[i];
}
console.log(combined);

//  3. Start with an array of objects and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

const arr3 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum2 += arr3[i].price;
}
console.log(sum2);

//  4. Start with an array of numbers and compute the the minumum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

const arr4 = [5, 10, 8, 3, 9];
var minimum = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] < minimum) {
    minimum = i;
  }
}
console.log(minimum);

//  5. Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

const arr5 = ["volleyball", "basketball", "badminton"];
var totalCharCount = 0;
for (let i = 0; i < arr5.length; i++) {
  totalCharCount += arr5[i].length;
}
console.log(totalCharCount);

//  6. Start with an array of objects and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

const arr6 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var lowestPricedItem = arr6[0];
for (let i = 0; i < arr6.length; i++) {
  var currentItem = arr6[i];
  if (currentItem.price < lowestPricedItem.price) {
    lowestPricedItem = currentItem;
  }
}
console.log(lowestPricedItem);

//  7. Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

const arr7 = [5, 10, 8, 3];
var product = arr7[0];
for (let i = 1; i < arr7.length; i++) {
  product *= arr7[i];
}
console.log(product);

//  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

const arr8 = ["volleyball", "basketball", "badminton"];
var stringWithDashes = "";
for (let i = 0; i < arr8.length; i++) {
  stringWithDashes += `-${arr8[i]}`;
}
stringWithDashes += "-";
console.log(stringWithDashes);

//  9. Start with an array of objects and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

const arr9 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestNamedItem = arr9[0];
for (let i = 0; i < arr9.length; i++) {
  var currentItem = arr9[i];
  if (currentItem.name < shortestNamedItem.name) {
    shortestNamedItem = currentItem;
  }
}
console.log(shortestNamedItem);

// 10. Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

const arr10 = [5, 10, 8, 3];
var maxNum = arr10[0];
for (let i = 0; i < arr10.length; i++) {
  var currentNum = arr10[i];
  if (currentNum > maxNum) {
    maxNum = currentNum;
  }
}
console.log(maxNum);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/130e1daf6d23f17a1426c8be6012ef21
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/1f6744f35fa0ab9f0c2726dc2e8c0b32
// SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/fb7b3fd6b61f34dbb27a90f24a6e59e9

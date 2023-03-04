// Select items from an array into a new array with items that match a certain condition

//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var arr1 = [2, 32, 80, 18, 12, 3];
var result1 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < 20) {
    result1.push(arr1[i]);
  }
}
console.log(result1);

//  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var arr2 = ["winner", "winner", "chicken", "dinner"];
var result2 = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i][0].toLowerCase() === "w") {
    result2.push(arr2[i]);
  }
}
console.log(result2);

//  3. Start with an array of objects and create a new array with only the objects with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var newItems = [];
for (let i = 0; i < items.length; i++) {
  if (items[i].price > 5) {
    newItems.push(items[i]);
  }
}
console.log(newItems);

//  4. Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var arr4 = [2, 4, 5, 1, 8, 9, 7];
var result4 = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    result4.push(arr4[i]);
  }
}
console.log(result4);

//  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var strings = ["a", "man", "a", "plan", "a", "canal", "panama"];
var newStrings = [];
for (let i = 0; i < strings.length; i++) {
  if (strings[i].length < 4) {
    newStrings.push(strings[i]);
  }
}
console.log(newStrings);

//  6. Start with an array of objects and create a new array with only the objects with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items2 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var newItems2 = [];
for (let i = 0; i < items2.length; i++) {
  if (items2[i].name.length < 6) {
    newItems2.push(items2[i]);
  }
}
console.log(newItems2);

//  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var arr7 = [8, 23, 0, 44, 1980, 3];
var result7 = [];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] < 10) {
    result7.push(arr7[i]);
  }
}
console.log(result7);

//  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var strings2 = ["big", "little", "good", "bad"];
var newStrings2 = [];
for (let i = 0; i < strings2.length; i++) {
  if (strings2[i][0].toLowerCase() !== "b") {
    newStrings2.push(strings2[i]);
  }
}
console.log(newStrings2);

//  9. Start with an array of objects and create a new array with only the objects with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items3 = [
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var newItems3 = [];
for (let i = 0; i < items3.length; i++) {
  if (items3[i].price < 10) {
    newItems3.push(items3[i]);
  }
}
console.log(newItems3);

// 10. Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var arr10 = [2, 4, 5, 1, 8, 9, 7];
var result10 = [];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 !== 0) {
    result10.push(arr10[i]);
  }
}
console.log(result10);

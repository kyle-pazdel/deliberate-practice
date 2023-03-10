// Map an array to a new array with some computation performed on each item

//  1. Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

const arr1 = [1, 2, 3];
const res1 = arr1.map((num) => num * 3);
console.log(res1);

//  2. Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

const arr2 = ["hello", "goodbye"];
res2 = arr2.map((str) => str.toUpperCase());
console.log(res2);

//  3. Start with an array of objects and create a new array of string values from each object's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

const arr3 = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const res3 = arr3.map((person) => person.name);
console.log(res3);

//  4. Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

const arr4 = [1, 2, 3];
const res4 = arr4.map((num) => num + 7);
console.log(res4);

//  5. Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

const arr5 = ["hello", "goodbye"];
const res5 = arr5.map((str) => str.length);
console.log(res5);

//  6. Start with an array of objects and create a new array of number values from each object's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

const arr6 = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const res6 = arr6.map((person) => person.age);
console.log(res6);

//  7. Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

const arr7 = [1, 2, 3];
const res7 = arr7.map((num) => num / 2.0);
console.log(res7);

//  8. Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

const arr8 = ["hello", "goodbye"];
const res8 = arr8.map((str) => str[0]);
console.log(res8);

// 9.  Start with an array of objects and create a new array of number values from each object's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

const arr9 = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const res9 = arr9.map((person) => person.age * 2);
console.log(res9);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

const arr10 = [1, 2, 3];
const res10 = arr10.map((num) => num.toString());
console.log(res10);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/706de9f23684a285907b38f5a79b4bb2
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/d679e6653dcda24baae5ecba0549a9e5
// SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/2b34f7d16557112230dc9ec7ed647c63

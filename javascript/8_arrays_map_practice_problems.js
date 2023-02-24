// Map an array to a new array with some computation performed on each item

//  1. Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

const arr1 = [1, 2, 3];
const result1 = arr1.map((num) => num * 3);
console.log(result1);

//  2. Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

const arr2 = ["hello", "goodbye"];
const result2 = arr2.map((str) => str.toUpperCase());
console.log(result2);

//  3. Start with an array of objects and create a new array of string values from each object's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

const people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const names = people.map((person) => person.name);
console.log(names);

//  4. Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

const arr4 = [1, 2, 3];
const plusSeven = arr4.map((num) => num + 7);
console.log(plusSeven);

//  5. Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

const arr5 = ["hello", "goodbye"];
const wordCount = arr5.map((str) => str.length);
console.log(wordCount);

//  6. Start with an array of objects and create a new array of number values from each object's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

const peopleTwo = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const ages = peopleTwo.map((person) => person.age);
console.log(ages);

//  7. Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

const arr7 = [1, 2, 3];
const divedByTwo = arr7.map((num) => num / 2.0);
console.log(divedByTwo);

//  8. Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

const arr8 = ["hello", "goodbye"];
const firstLetter = [];
arr8.map((str) => {
  let arr = str.split("");
  firstLetter.push(arr[0]);
});
console.log(firstLetter);

// 9.  Start with an array of objects and create a new array of number values from each object's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

const peopleThree = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const agesTimesTwo = peopleThree.map((person) => person.age * 2);
console.log(agesTimesTwo);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

const arr10 = [1, 2, 3];
const numbersToStrings = arr10.map((num) => num.toString());
console.log(numbersToStrings);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/706de9f23684a285907b38f5a79b4bb2
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/d679e6653dcda24baae5ecba0549a9e5
// SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/2b34f7d16557112230dc9ec7ed647c63

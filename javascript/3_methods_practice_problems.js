// Use built-in methods for strings and numbers

// 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.\

const word = window.prompt("Enter a word: ");
console.log(word.toUpperCase());

// 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

const num = window.prompt("Enter a number: ");
if (num > 100) {
  console.log("That's a big number");
}

// 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

const num3 = window.prompt("Enter a number: ");
const num4 = window.prompt("Enter another number: ");
console.log(parseInt(num3) + parseInt(num4));

// 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

const word4 = window.prompt("Enter a word: ");
console.log(word4.split("").reverse().join(""));

// 5. Write a program that asks the user to enter a number, then prints the number times 10.

const num5 = window.prompt("Enter a number: ");
console.log(parseInt(num5 * 10));

// 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

const word6 = window.prompt("Enter a word: ");
const word7 = window.prompt("Enter another word: ");
console.log(word6.toUpperCase() + " " + word7.toUpperCase());

// 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

const word72 = window.prompt("Enter a word: ");
console.log(word72.split("").length);

// 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

const num8 = window.prompt("Enter a number: ");
if (num8 < 0) {
  console.log("That's a negative number");
}

// 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

const num9 = window.prompt("Enter a number: ");
const num10 = window.prompt("Enter another number: ");
console.log(parseInt(num9) * parseInt(num10));

// 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

const word10 = window.prompt("Enter a word: ");
if (word10.length > 5) {
  console.log("That's a long word");
}

// JavaScript solutions: https://gist.github.com/peterxjang/d30d686d6dbe194dbb89465849b6926f

// NOTES FOR BROWSER vs. NODE EXECUTION
// // IF RUNNING IN NODE:
// (Learn boiler-plate solution, utilizing callback methods.)
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Who are you?", (name) => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

// ~ or ~

// // IF RUNNING IN NODE WITH "prompt-sync" LIBRARY
// const prompt = require("prompt-sync")();
// const word = prompt("Enter a word: ");
// console.log(word.toUpperCase());

// // IF RUNNING IN BROWSER:
// var num1 = window.prompt("Enter a number: ");
// var num2 = window.prompt("Enter another number: ");
// console.log(parseInt(num1) + parseInt(num2));

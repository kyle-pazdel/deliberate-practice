// Use built-in methods for strings and numbers
// (Learn boiler-plate solution, utilizing callback methods.)

// 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.\

const prompt = require("prompt-sync")();
const word = prompt("Enter a word: ");
console.log(word.toUpperCase());

// 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

const prompt2 = require("prompt-sync")();
const num = prompt2("Enter a number: ");
if (num > 100) {
  console.log("That's a big number");
}

// 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

const prompt3 = require("prompt-sync")();
const num2 = prompt3("Enter a number: ");

const prompt4 = require("prompt-sync")();
const num3 = prompt4("Enter another number: ");

console.log(parseInt(num2) + parseInt(num3));

// 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

const prompt5 = require("prompt-sync")();
const word2 = prompt5("Enter a word: ");
console.log(word2.split("").reverse().join(""));

// 5. Write a program that asks the user to enter a number, then prints the number times 10.

const prompt6 = require("prompt-sync")();
const num4 = prompt6("Enter a number: ");
console.log(parseInt(num4) * 10);

// 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

const prompt7 = require("prompt-sync")();
const word3 = prompt7("Enter a word: ");
const prompt8 = require("prompt-sync")();
const word4 = prompt8("Enter another word: ");
console.log(word3 + " " + word4);

// 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

const prompt9 = require("prompt-sync")();
const word9 = prompt9("Enter a word: ");
console.log(word9.length);

// 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

const prompt10 = require("prompt-sync")();
const num5 = prompt10("Enter a number: ");
if (parseInt(num5) < 0) {
  console.log("That's a negative number");
}

// 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

const prompt11 = require("prompt-sync")();
const num6 = prompt11("Enter a number: ");
const prompt12 = require("prompt-sync")();
const num7 = prompt12("Enter another number: ");

console.log(parseInt(num6) * parseInt(num7));

// 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

const prompt13 = require("prompt-sync")();
const word10 = prompt13("Enter a word: ");
if (word10.length > 5) {
  console.log("That's a long word");
}

// JavaScript solutions: https://gist.github.com/peterxjang/d30d686d6dbe194dbb89465849b6926f

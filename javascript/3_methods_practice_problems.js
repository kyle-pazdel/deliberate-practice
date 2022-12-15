// Use built-in methods for strings and numbers

// 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

const response1 = window.prompt("Enter a word: ");
console.log(response1.toUpperCase());

// 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

const response2 = window.prompt("Enter a number: ");
if (parseInt(response2) > 100) {
  console.log("That's a big number");
}

// 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

const response3 = window.prompt("Enter a number: ");
const response3b = window.prompt("Enter another number: ");
console.log(parseInt(response3) + parseInt(response3b));

// 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

const response4 = window.prompt("Enter a word: ");
const reverse = response4.split("").reverse().join("");
console.log(reverse);

// 5. Write a program that asks the user to enter a number, then prints the number times 10.

const response5 = window.prompt("Enter a number: ");
var i5 = 0;
while (i5 < 10) {
  console.log(parseInt(response5));
  i5++;
}

// 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

const response6 = window.prompt("Enter a word: ");
const response6b = window.prompt("Enter another word: ");
console.log(response6.toUpperCase() + " " + response6b.toUpperCase());

// 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

const response7 = window.prompt("Enter a word: ");
console.log(response7.split("").length);

// 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

const response8 = window.prompt("Enter a number: ");
if (parseInt(response8) < 0) {
  console.log("That's a negative number");
}

// 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

const response9 = window.prompt("Enter a number: ");
const response9b = window.prompt("Enter another number: ");
console.log(parseInt(response9) * parseInt(response9b));

// 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

const response10 = window.prompt("Enter a word: ");
if (response10.length > 5) {
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

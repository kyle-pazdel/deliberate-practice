// Insert a variable into a string using either concatenation or interpolation from memory

//  1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

const firstName = "Kyle";
const lastName = "Pazdel";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the ${} operator).

const firstName2 = "Kyle";
const lastName2 = "Pazdel";
var fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2);

//  3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ");
if (word.toLowerCase() === "marco") {
  console.log("Polo");
}

//  4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

const a = "red";
const b = "blue";
const c = "yellow";
var sentence = "The primary colors are " + a + ", " + b + ", and " + c + ".";
console.log(sentence);

//  5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the ${} operator).

const a2 = "red";
const b2 = "blue";
const c2 = "yellow";
var sentence2 = `The primary colors are ${a2}, ${b2}, and ${c2}.`;
console.log(sentence2);

//  6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

const prompt2 = require("prompt-sync")();
const name = prompt2("Enter a name: ");
if (name.toLowerCase() !== "santa") {
  console.log("You're not Santa");
}

//  7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

const title = "Meditations";
const author = "Marcus Aurelius";
const sentence3 = "A great starting text to introduce yourself to Stoicism is " + title + " by " + author + ".";
console.log(sentence3);

//  8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the ${} operator).

const title2 = "Meditations";
const author2 = "Marcus Aurelius";
const sentence4 = `A great starting text to introduce yourself to Stoicism is ${title2} by ${author2}.`;
console.log(sentence4);

//  9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

const prompt3 = require("prompt-sync")();
const password = prompt3("Enter a password: ");
if (password === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access denied");
}

//  10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

const city1 = "San Francisco";
const city2 = "Long Beach";
const city3 = "Palm Springs";
var sentence5 = "I used to live near " + city1 + ", then I moved to " + city2 + ", and now I live in " + city3 + ".";
console.log(sentence5);

// JavaScript solutions: https://gist.github.com/peterxjang/a749b3f305ef9f0b5b3382f62a5b2447

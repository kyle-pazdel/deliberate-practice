// Insert a variable into a string using either concatenation or interpolation from memory

//  1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

const fn = "First";
const ln = "Last";
console.log(fn + " " + ln);

// 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the ${} operator).

const fn2 = "First";
const ln2 = "Last";
console.log(`${fn2} ${ln2}`);

//  3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

const input = window.prompt("Input a word");
if (input.toLowerCase() === "marco") {
  console.log("polo");
}

//  4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

const c1 = "red";
const c2 = "blue";
const c3 = "yellow";

console.log(c1 + ", " + c2 + ", and " + c3 + " are the primary colors.");

//  5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the ${} operator).

const c4 = "red";
const c5 = "blue";
const c6 = "yellow";

console.log(`${c4}, ${c5}, and ${c6} are the primary colors.`);

//  6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

const input2 = window.prompt("Enter a name");
if (input2.toLowerCase() !== "santa") {
  console.log("You're not Santa.");
}

//  7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

const title = "title";
const author = "author";
console.log(title + " was written by " + author + ".");

//  8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the ${} operator).

const title2 = "title2";
const author2 = "author2";
console.log(`${title2} was written by ${author2}.`);

//  9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

const password = window.prompt("Enter a password");
if (password === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access denied");
}

//  10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

const city1 = "city1";
const city2 = "city2";
const city3 = "city3";

console.log(city1 + ", " + city2 + ", and " + city3 + " are three cities.");

// JavaScript solutions: https://gist.github.com/peterxjang/a749b3f305ef9f0b5b3382f62a5b2447
// file:///Users/KylePazdel/deliberate-practice/JavaScript/2_strings_practice_problems.js

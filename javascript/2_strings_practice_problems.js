// Insert a variable into a string using either concatenation or interpolation from memory

//  1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

const fn = "Kyle";
const ln = "Pazdel";
console.log(fn + " " + ln);

// 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the ${} operator).

const fn2 = "Kyle";
const ln2 = "Pazdel";
console.log(`${fn2} ${ln2}`);

//  3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

var word3 = window.prompt("Enter a word: ");
if (word3.toLowerCase() === "marco") {
  console.log("polo");
}

//  4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

const c1 = "red";
const c2 = "blue";
const c3 = "yellow";
console.log(c1 + ", " + c2 + ", and " + c3 + " are the primary colors.");

//  5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the ${} operator).

const c4 = "green";
const c5 = "orange";
const c6 = "purple";
console.log(`${c4}, ${c5}, and ${c6} are the secondary colors.`);

//  6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

const input = window.prompt("Enter a name: ");
if (input.toLowerCase() !== "santa") {
  console.log("You're not Santa.");
}

//  7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

const t = "Meditations";
const a = "Marcus Aurelius";
console.log(t + " by " + a + " is a great introduction to Stoicism.");

//  8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the ${} operator).

console.log(`${t} by ${a} is a great introduction to Stoicism.`);

//  9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

const pw = window.prompt("Enter a password: ");
if (pw === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access denied");
}

//  10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

const cit1 = "Palm Springs";
const cit2 = "Long Beach";
const cit3 = "Fairfield";

console.log(
  "I currently live in " + cit1 + ", though I lived in " + cit2 + " previously, and I grew up in " + cit3 + "."
);

// JavaScript solutions: https://gist.github.com/peterxjang/a749b3f305ef9f0b5b3382f62a5b2447
// file:///Users/KylePazdel/deliberate-practice/JavaScript/2_strings_practice_problems.js

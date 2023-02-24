// Create a function with valid syntax from memory

// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

function timesTwo(num) {
  num *= 2;
  return num;
}

console.log(timesTwo(20));

// 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

function allCaps(str) {
  str = str.toUpperCase();
  return str;
}

console.log(allCaps("hello"));

// 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}

console.log(subtract(10, 7));

// 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function square(num) {
  num *= num;
  return num;
}

console.log(square(4));

// 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(str) {
  return str.split("")[0];
}

console.log(firstLetter("hello"));

// 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function combineStrings(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`;
}

console.log(combineStrings("These", "are", "words."));

// 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function coerceToString(num) {
  return num.toString();
}

console.log(coerceToString(5000));

// 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

function repeatFiveTimes(str) {
  let repeated = "";
  for (i = 0; i < 5; i++) {
    repeated = repeated + str + " ";
  }
  return repeated;
}

console.log(repeatFiveTimes("hello"));

// 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function findAverage(num1, num2, num3) {
  average = (num1 + num2 + num3) / 3.0;
  return average;
}

console.log(findAverage(10, 6, 2));

// 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function timesTenPlusThirty(num) {
  result = num * 10 + 30;
  return result;
}

console.log(timesTenPlusThirty(10));

// JavaScript solutions: https://gist.github.com/peterxjang/1c79bc30b1e377a1852511b619259f79

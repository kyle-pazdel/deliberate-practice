// 'Create an if statement that uses elsif and else with valid syntax from memory'

//  1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// const v = 1;
const v = 10;
if (v === 10) {
  console.log(0);
} else {
  console.log(-1);
}

//  2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// const v = 9;
// const v = 10;
const v2 = 90;
if (v2 < 10) {
  console.log(-1);
} else if (v > 10) {
  console.log(1);
} else {
  console.log(0);
}

//  3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

const v3 = 9;
// const v3b = 1;
const v3b = 10;
if (v3 < 10 && v3b < 10) {
  console.log(1);
} else {
  console.log(0);
}

//  4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// const v4 = 1000;
const v4 = 10000;
if (v4 > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

//  5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// const v5 = 60;
// const v5 = 22;
// const v5 = 13;
const v5 = 3;
if (v5 < 10) {
  console.log(9);
} else if (v5 < 20) {
  console.log(19);
} else if (v5 < 30) {
  console.log(29);
} else {
  console.log(-1);
}

//  6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.
const v6 = 9;
const v6b = 6;
if (v6 > 10 || v6b > 10) {
  console.log(100);
} else {
  console.log(-100);
}

//  7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// const v7 = -1;
const v7 = 0;
if (v7 < 0) {
  console.log(1776);
} else {
  console.log(1979);
}

//  8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// const v8 = 100;
// const v8 = 99;
const v8 = 29;
if (v8 === 100) {
  console.log(100);
} else if (v8 === 99) {
  console.log(99);
} else {
  console.log(0);
}

//  9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

const v9 = -1;
// const v9b = 1;
const v9b = -1;
if (v9 < 0 && v9b > 0) {
  console.log(1);
} else {
  console.log(0);
}

//  10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// const v10 = 99;
// const v10 = 80;
// const v10 = 60;
// const v10 = 40;
const v10 = 20;
if (v10 > 80) {
  console.log(5);
} else if (v10 > 60) {
  console.log(4);
} else if (v10 > 40) {
  console.log(3);
} else if (v10 > 20) {
  console.log(2);
} else {
  console.log(1);
}

// JavaScript solutions: https://gist.github.com/peterxjang/80d7875ad5e4a3a02bb1cdeb6f354ed4

// Create a loop which modifies a variable each time the loop runs from memory

// 1. Write a loop to print the numbers 1 through 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a loop that prints the word "hello" 5 times.

for (let i = 0; i < 5; i += 1) {
  console.log("hello");
}

// 3. Write a loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// eslint-disable-next-line for-direction
for (let i = 1; i > 0; i++) {
  var response3 = window.prompt("Enter a word: ");
  if (response3.toLowerCase() === "stop") {
    break;
  }
}

// 4. Write a loop that prints the numbers 0 through 100, increasing by 5 each time.

for (let i = 0; i <= 100; i += 5) {
  console.log(i);
}

// 5. Write a loop that prints the number 9000 ten times.

for (let i = 0; i < 10; i++) {
  console.log(9000);
}

// 6. Write a loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// eslint-disable-next-line for-direction
for (let i = 1; i > 0; i++) {
  var response6 = window.prompt("Enter a number: ");
  if (parseInt(response6) > 10) {
    break;
  }
}

// 7. Write a loop that prints the numbers 50 to 70.

for (let i = 50; i <= 70; i++) {
  console.log(i);
}

// 8. Write a loop that prints the phrase "Around the world" 144 times.

for (let i = 1; i <= 144; i++) {
  console.log(`${i}: Around the world`);
}

// 9. Write a loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// eslint-disable-next-line for-direction
for (let i = 1; i > 0; i++) {
  var response9 = window.prompt("Enter a word: ");
  if (response9.length > 5) {
    break;
  }
}

// 10. Write a loop that prints the even numbers from 2 to 40.

for (let i = 2; i <= 40; i += 2) {
  console.log(i);
}

// JavaScript solutions: https://gist.github.com/peterxjang/da9cdaf5fa764ecfbefedb2d339193aa

// file:///Users/KylePazdel/deliberate-practice/JavaScript/test.html

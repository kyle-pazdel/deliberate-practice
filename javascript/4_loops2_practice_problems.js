// Create a loop which modifies a variable each time the loop runs from memory

// 1. Write a while loop to print the numbers 1 through 10.

var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Write a while loop that prints the word "hello" 5 times.

var i2 = 0;
while (i2 < 5) {
  console.log("hello");
  i2++;
}

// 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

var go = true;
while (go) {
  const response = window.prompt("Enter a word: ");
  if (response.toLowerCase() === "stop") {
    go = false;
  }
}

// 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

var i4 = 0;
while (i4 <= 100) {
  console.log(i4);
  i4 += 5;
}

// 5. Write a while loop that prints the number 9000 ten times.

var i5 = 0;
while (i5 < 10) {
  console.log(9000);
  i5++;
}

// 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

var go2 = true;
while (go2) {
  const response = window.prompt("Enter a number: ");
  if (parseInt(response) > 10) {
    go2 = false;
  }
}

// 7. Write a while loop that prints the numbers 50 to 70.

var i7 = 50;
while (i7 <= 70) {
  console.log(i7);
  i7++;
}

// 8. Write a while loop that prints the phrase "Around the world" 144 times.

var i8 = 1;
while (i8 <= 144) {
  console.log("Around the world");
  i8++;
}

// 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

var go3 = true;
while (go3) {
  const response = window.prompt("Enter a word: ");
  if (response.length > 5) {
    go3 = false;
  }
}

// 10. Write a while loop that prints the even numbers from 2 to 40.

var i10 = 2;
while (i10 <= 40) {
  console.log(i10);
  i10 += 2;
}

// JavaScript solutions: https://gist.github.com/peterxjang/da9cdaf5fa764ecfbefedb2d339193aa

// file:///Users/KylePazdel/deliberate-practice/JavaScript/test.html

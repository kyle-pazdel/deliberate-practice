// Create an array, read items from an array, and add new items to existing array from memory

// 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

let arr1 = ["these", "three", "words"];
arr1.push("plus");
arr1.push("two");
console.log(arr1);

// 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

let arr2 = ["a", "b", "c", "d"];
arr2[1] = arr2.indexOf("b") + 1;
console.log(arr2);

// 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

arr3 = [1, 2, 3, 4, 5];
for (i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

arr4 = [123];
arr4.push(124);
arr4.push(125);
arr4.push(126);
console.log(arr4);

// 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

arr5 = ["these", "are", "strings"];
arr5[2] = arr5[2].toUpperCase();
console.log(arr5);

// 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

arr6 = ["Kyle", "Alex", "Darelyn"];
for (i = 0; i < arr6.length; i++) {
  console.log(arr6[i]);
}

// 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

arr7 = ["two", "strings"];
arr7.push("together");
console.log(arr7);

// 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

arr8 = [1, 2, 3, 4, 5];
arr8[0] = arr8[0] * 10;
console.log(arr8);

// 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

arr9 = [234, 235];
for (i = 0; i < arr9.length; i++) {
  console.log(arr9[i]);
}

// 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

arr10 = ["Country One", "Country Two", "Country Three"];
arr10.push("Country Four");
console.log(arr10);

// JavaScript solutions: https://gist.github.com/peterxjang/fe573ae8b79ea7ffc6bf60de5a1c55d1

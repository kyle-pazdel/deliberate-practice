arr = ["this", "is", "an", "array", "of", "different", "strings"];
vowelCounts = {};
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr[i].length; j++) {
    let letter = arr[i][j];
    if (letter === "a" || letter === "i" || letter === "o" || letter === "e" || letter === "u") {
      count += 1;
    }
  }
  vowelCounts[arr[i]] = count;
}
console.log(vowelCounts);

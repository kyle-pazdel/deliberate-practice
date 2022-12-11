# Create an array, read items from an array, and add new items to existing array from memory

# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

arr = ["word1", "word2", "word3"]
arr << "word4"
arr << "word5"
p arr

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

arr = ["a", "b", "c", "d"]
arr[1] = 12
p arr

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

arr = [1, 2, 3, 4, 5]
i = 0
while i < arr.length
  p arr[i]
  i += 1
end

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

arr = [0]
i = 0
while i < 3
  arr << (i + 1)
  i += 1
end
p arr

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

arr = ["this", "is", "a string"]
arr[2] = arr[2].upcase
p arr

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

arr = ["John", "Jane", "Kirk"]
i = 0
while i < 3
  p arr[i]
  i += 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

arr = ["werk", "diva"]
arr << ", okurrrrrt!"
p arr

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

arr = [1, 2, 3, 4, 5]
arr[0] = arr[0] * 10
p arr

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

arr = [1, 2]
i = 0
while i < arr.length
  p arr[i]
  i += 1
end

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

arr = ["Canada", "United States", "Mexico"]
arr << "Puerto Rico"
p arr

# SOLUTIONS: https://gist.github.com/peterxjang/7095a2b19e1da2cc18d4a0dcd66cb8f1

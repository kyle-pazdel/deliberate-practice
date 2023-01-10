# Create an array, read items from an array, and add new items to existing array from memory

# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

arr = ["one", "two", "three"]
arr.append("four")
arr.append("five")
print(arr)

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

arr = ["a", "b", "c", "d"]
arr[1] = 2
print(arr)

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a loop.

arr = [1, 2, 3, 4, 5]
for i in arr:
    print(i)

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

arr = [1]
i = 2
while i < 5:
    arr.append(i)
    i += 1
print(arr)

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

arr = ["string one", "string two", "string three"]
arr[2] = arr[2].upper()
print(arr)

# 6. Create an array to store 3 names. Then print out each name on separate lines with a loop.

arr = ["sally", "bob", "earl"]
for i in arr:
    print(i)

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

arr = ["string one", "string two"]
arr.append("string three")
print(arr)

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

arr = [1, 2, 3, 4, 5]
arr[0] = arr[0] * 10
print(arr)

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a loop.

arr = [1, 2]
for i in arr:
    print(i)

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

arr = ["Country One", "Country Three", "Country Four"]
arr.insert(1, "Country Two")
print(arr)

# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/5_arrays1_solutions.py

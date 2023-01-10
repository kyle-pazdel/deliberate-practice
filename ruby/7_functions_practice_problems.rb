# Create a function with valid syntax from memory

# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def twice(num)
  return num * 2
end

p twice(4)

# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def caps(string)
  return string.upcase
end

p caps("hello")

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def difference(num1, num2)
  return num1 - num2
end

p difference(10, 5)

# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def squared(num)
  return num * num
end

p squared(12)

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(string)
  return string[0]
end

p first_letter("Kyle")

# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def combine_strings(str1, str2, str3)
  return "#{str1} #{str2} #{str3}"
end

p combine_strings("How", "are", "you?")

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def stringify(num)
  return num.to_s
end

p stringify(1234)

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def five_times_repeat(str)
  return (str + " ") * 5
end

p five_times_repeat("hello")

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(num1, num2, num3)
  return (num1 + num2 + num3) / 3.0
end

p average(10, 5, 0)

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

def times_ten_plus_thirty(num)
  return num * 10 + 30
end

p times_ten_plus_thirty(1)

# SOLUTIONS: https://gist.github.com/peterxjang/6a26d3c698c651dd6e9ccb168d32648c

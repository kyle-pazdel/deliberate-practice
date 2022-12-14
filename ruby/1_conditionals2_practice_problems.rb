# 'Create an if statement that uses elsif and else with valid syntax from memory'

# 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

v = 10
v = 11
if v == 10
  p 0
else
  p -1
end

# 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.
v = 9
v = 10
v = 11
if v < 10
  p -1
elsif v == 10
  p 0
else
  p 1
end

# 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

v = 1
v2 = 9
v2 = 10
if v < 10 && v2 < 10
  p 1
else
  p 0
end

# 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
v = 1000
v = 10000
if v > 9000
  p 1
else
  p -1
end

# 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

v = 8
v = 12
v = 18
v = 30
if v < 10
  p 9
elsif v < 20
  p 19
elsif v < 30
  p 29
else
  p -1
end

# 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.
v = 23
v = 9
v2 = 10
if v > 10 || v2 > 10
  p 100
else
  p -100
end

# 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

v = 0
v = -1
if v < 0
  p 1776
else
  p 1979
end

# 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

v = 25
v = 99
v = 100
if v == 100
  p 100
elsif v == 99
  p 99
else
  p 0
end

# 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

v = 1
v = -1
v2 = 2
if v < 0 && v2 > 0
  p 1
else
  p 0
end

# 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

v = 112
v = 76
v = 55
v = 38
v = 17

if v > 80
  p 5
elsif v > 60
  p 4
elsif v > 40
  p 3
elsif v > 20
  p 2
else
  p 1
end

# SOLUTIONS: https://gist.github.com/peterxjang/aee70f966f0f725609eee89b06e8a6c0

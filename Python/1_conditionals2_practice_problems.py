# 'Create an if statement that uses elsif and else with valid syntax from memory'
# *** (Attempt using different data types next time (investigate integers v floats in python)) ***

# 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

v = 10
if v == 10:
  print(0)

# 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

v = 2
v = 12
v = 10
if v < 10:
  print(-1)
elif v > 10:
  print(1)
elif v == 10:
  print(0)

# 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

v = -2
v2 = 10
if v < 10 and v < 10:
  print(1)
else:
  print(0)

# 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

v = 2345
if v > 9000:
  print(1)
else:
  print(-1)

# 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

v = 56
v = 28
v = 15
v = 4
if v < 10:
  print(9)
elif v < 20:
  print(19)
elif v < 30:
  print(29)
else:
  print(-1)

# 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

v = 1
v2 = 2
if v > 10 or v2 > 10:
  print(100)
else:
  print(-100)

# 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

v = -1
v = 0
if v < 0:
  print(1776)
else:
  print(1979)

# 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

v = 23
v = 100
v = 99
if v == 100:
  print(100)
elif v == 99:
  print(99)
else:
  print(0)

# 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

v = 1
v2 = 2
v = -1
if v < 0 and v2 > 0:
  print(1)
else:
  print(0)

# 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

fahrenheit = 451
fahrenheit = 76
fahrenheit = 55
fahrenheit = 32
fahrenheit = 11
if fahrenheit > 80:
  print(5)
elif fahrenheit > 60:
  print(4)
elif fahrenheit > 40:
  print(3)
elif fahrenheit > 20:
  print(2)
else:
  print(1)



# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/1_conditionals2_solutions.py

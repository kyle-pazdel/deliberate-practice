# Create a function with valid syntax from memory

# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def double(num):
    num = num * 2
    return num


print(double(2))


# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def capitalize(string):
    string = string.upper()
    return string


print(capitalize("hello"))

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.


def difference(num1, num2):
    diff = num1 - num2
    return diff


print(difference(5, 4))


# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def squared(num):
    squared = num * num
    return squared


print(squared(4))

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.


def first_letter(string):
    first_letter = string[0]
    return first_letter


print(first_letter("hello"))


# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def make_sentence(string1, string2, string3):
    sentence = f"{string1}, {string2}, and {string3}"
    return sentence


print(make_sentence("apples", "bananas", "kiwis"))

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.


def to_string(num):
    new_string = str(num)
    return new_string


print(to_string(1000))

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.


def repeat_five_times(string):
  # for s in range(1, 6):
    five_times = (f"{string} ") * 5
    return five_times


print(repeat_five_times("hello"))

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.


def average(num1, num2, num3):
    average = (num1 + num2 + num3) / 3.0
    return average


print(average(10, 5, 0))

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.


def times_ten_and_thirty(num):
    calculated = num * 10 + 30
    return calculated


print(times_ten_and_thirty(10))

# SOLUTIONS: tbd

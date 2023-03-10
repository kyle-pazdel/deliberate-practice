# Use built-in methods for strings and numbers

# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

word = input("Enter a word: ")
print(word.upper())

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

num = input("Enter a number: ")
if int(num) > 100:
    print("That's a big number")

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

num1 = input("Enter a number: ")
num2 = input("Enter a second number: ")
print(int(num1) + int(num2))

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

word = input("Enter a word to be reversed: ")
print(word[::-1])

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

num = input("Enter a number: ")


def times_ten(num):
    return num * 10


print(times_ten(int(num)))

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

word = input("enter a word: ")
word2 = input("enter another word: ")
print(word.upper() + " " + word2.upper())

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

word = input("enter a word: ")
print(len(word))

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

num = input("Enter a number: ")
if int(num) < 0:
    print("That's a negative number")

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

num = input("Enter a number: ")
num2 = input("Enter a second number: ")


def multiply(num, num2):
    return num * num2


print(multiply(int(num), int(num2)))


# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

word = input("Enter a word: ")
if len(word) > 5:
    print("That's a long word")

# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/4_loops2_practice_problems.py

# Use built-in methods for strings and numbers

# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

response = input("Enter a word: ")
print(response.upper())

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

response = input("Enter a number: ")
if int(response) > 100:
  print("That's a big number")

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

response = input("Enter a number: ")
response2 = input("Enter another number: ")
print(int(response) + int(response2))

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

response = input("Enter a word: ")
print(response[::-1])


# 5. Write a program that asks the user to enter a number, then prints the number times 10.

response = input("Enter a number: ")
i = 0
while i < 10:
  print(response)
  i += 1

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

response = input("Enter a word: ")
response2 = input("Enter another word: ")
print(f"{response.upper()} {response2.upper()}")

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

response = input("Enter a word: ")
print(len(response))

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

response = input("Enter a number: ")
if int(response) < 0:
  print("That's a negative number")

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

response = input("Enter a number: ")
response2 = input("Enter another number: ")
print(int(response) * int(response2))

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

response = input("Enter a word: ")
if len(response) > 5:
  print("That's a long word")

# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/4_loops2_practice_problems.py

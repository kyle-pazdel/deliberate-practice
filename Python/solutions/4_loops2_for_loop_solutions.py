# Create a loop which modifies a variable each time the loop runs from memory

# 1. Write a loop to print the numbers 1 through 10.

for i in range(1, 11):
  print(i)


# 2. Write a loop that prints the word "hello" 5 times.

for i in range(1, 6):
  print("hello")

# 3. Write a loop that asks the user to enter a word and will run forever until the user enters the word "stop".

response = ""
while not response.lower() == "stop":
  response = input("Enter a word: ")


# 4. Write a loop that prints the numbers 0 through 100, increasing by 5 each time.

for i in range(0, 101, 5):
  print(i)

# 5. Write a loop that prints the number 9000 ten times.

for i in range(1, 11):
  print(9000)


# 6. Write a loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

response = 0
while not int(response) > 10:
  response = input("Enter a number: ")


# 7. Write a loop that prints the numbers 50 to 70.

for i in range(50, 71):
  print(i)

# 8. Write a loop that prints the phrase "Around the world" 144 times.

for i in range(1, 145):
  print(f"{i}: Around the world")

# 9. Write a loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

response = ""
while not len(response) > 5:
  response = input("Enter a long word: ")

# 10. Write a loop that prints the even numbers from 2 to 40.

for i in range(2, 41, 2):
  print(i)


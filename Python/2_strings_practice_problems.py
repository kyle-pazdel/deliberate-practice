# Insert a variable into a string using either concatenation or interpolation from memory

# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

fn = "John"
ln = "Doe"
print(fn + " " + ln)

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

fn = "John"
ln = "Doe"
print(f"{fn} {ln}")

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

inpt = input("Enter a word: ")
if inpt.lower() == "marco":
  print("polo")

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

c1 = "red"
c2 = "blue"
c3 = "yellow"
print(c1.capitalize() + ", " + c2 + ", and " + c3 + " are primary colors.")

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

c1 = "green"
c2 = "orange"
c3 = "purple"
print(f"{c1.capitalize()}, {c2}, and {c3} are secondary colors.")

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

name = input("Enter a name: ")
if name.lower() != "santa":
  print("You're not Santa.")

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

t = "Meditations"
a = "Marcus Aurelius"
print(t + " by " + a + " is a great introduction to Stoicism.")

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

t = "Meditations"
a = "Marcus Aurelius"
print(f"{t} by {a} is a great introduction to Stoicism.")

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

pw = input("Enter a password: ")
if pw == "Joshua":
  print("Shall we play a game?")
else:
  print("Access denied")

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

c1 = "San Francisco"
c2 = "Los Angeles"
c3 = "Sacramento"
print("Many folks think that " + c1 + " or " + c2 + " are the Capital City of California, but it is actually " + c3 + ".")

# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/2_strings_solutions.py

# Insert a variable into a string using either concatenation or interpolation from memory

# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

fn = "Kyle"
ln = "Pazdel"
print(fn + " " + ln)

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

fn = "Kyle"
ln = "Pazdel"
print(f"{fn} {ln}")

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

print("Enter a word: ")
inpt = input()
if inpt.lower() == "marco":
  print("polo")

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

c1 = "red"
c2 = "yellow"
c3 = "blue"
print(c1.capitalize() + ", " + c2 +", and " + c3 + " are the primary colors")

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

c1 = "green"
c2 = "purple"
c3 = "orange"
print(c1.capitalize() + ", " + c2 + ", and " + c3 + " are the seconary colors.")

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

print("Enter a name: ")
inpt = input()
if inpt.lower() != "santa":
  print("You're not Santa")

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

t = "Title"
a = "Author"
print(t + " is a great book by " + a + ".")

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

t = "Title"
a = "Author"
print(f"{t} is a great book by {a}.")


# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

print("Enter a password: ")
pw = input()
if pw == "Joshua":
  print("Shall we play a game?")
else:
  print("Access denied")

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

c1 = "Palm Springs"
c2 = "Los Angeles"
c3 = "Vancouver"

print (c1 + ", " + c2 + ", and " + c3 + " are fun cities to live in!")

# SOLUTIONS: https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/2_strings_solutions.py

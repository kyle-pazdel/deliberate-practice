# Insert a variable into a string using either concatenation or interpolation from memory

# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).
fn = "Kyle"
ln = "Pazdel"
print(fn + " " + ln)

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

fn = "John"
ln = "Doe"
print(f'{fn} {ln}')

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

print("Enter a word: ")
input1 = input()
if input1.lower() == "marco":
  print("polo")

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

c1 = "red"
c2 = "blue"
c3 = "yellow"
print(c1.capitalize() + ", " + c2 + ", and " + c3 + " are the primary colors.")

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

c1 = "green"
c2 = "purple"
c3 = "orange"
print(f'{c1.capitalize()}, {c2}, and {c3} are the secondary colors.')

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

print("Enter a name: ")
name = input()
if name.capitalize() != "Santa":
  print("You're not Santa.")

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

t = "Meditations"
a = "Marcus Aurelius"
print("A great starting text to introduce yourself to Stoicism is " + t + " by " + a + ".")

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

t = "Meditations"
a = "Marcus Aurelius"
print(f"A great starting text to introduce yourself to Stoicism is {t} by {a}.")

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

print("Enter a password: ")
pw = input()
if pw == "Joshua":
  print("Shall we play a game?")
else:
  print("Access denied")

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

c1 = "Minneapolis"
c2 = "Chicago"
c3 = "Milwaukee"
print(c1.capitalize() + ", " + c2 + ", and " + c3 + "are all in the Mid-West.")


# SOLUTIONS: tbd

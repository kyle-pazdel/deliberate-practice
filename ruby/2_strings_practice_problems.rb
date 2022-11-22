# Insert a variable into a string using either concatenation or interpolation from memory

# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "Kyle"
last_name = "Pazdel"

p first_name + " " + last_name

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first_name = "Kyle"
last_name = "Pazdel"

p "#{first_name} #{last_name}"

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

print "Enter a word: "
word = gets.chomp
if word.downcase == "marco"
  p "polo"
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

a = "red"
b = "yellow"
c = "blue"
p "The primary colors are " + a + ", " + b + ", and " + c + "."

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

a = "red"
b = "yellow"
c = "blue"
p "The primary colors are #{a}, #{b}, and #{c}."

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

print "Enter a name: "
name = gets.chomp
unless name.downcase == "santa"
  p "You're not Santa."
end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

t = "Meditations"
a = "Marcus Aurelius"
p "A great starting text to introduce yourself to Stoicism is " + t + " by " + a + "."

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

t = "Meditations"
a = "Marcus Aurelius"
p "A great starting text to introduce yourself to Stoicism is #{t} by #{a}."
# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

print "Enter password: "
password = gets.chomp
if password == "Joshua"
  p "Shall we play a game?"
else
  p "Access denied"
end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

a = "San Francisco"
b = "Long Beach"
c = "Palm Springs"
p "I used to live near " + a + ", then I moved to " + b + ", and now I live in " + c + "."

# SOLUTIONS: https://gist.github.com/peterxjang/79ba5acc912a86cce2a18c2f14b1c712

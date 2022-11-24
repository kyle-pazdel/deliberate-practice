# Use built-in methods for strings and numbers

# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

print "Enter a word: "
word = gets.chomp
p word.upcase

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

print "Enter a number: "
num = gets.chomp

if num.to_i > 100
  p "That's a big number"
end

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

print "Enter a number: "
n1 = gets.chomp
print "Enter a second number: "
n2 = gets.chomp
p n1.to_i + n2.to_i

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

print "Enter a word: "
word = gets.chomp
p word.reverse

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

print "Enter a number: "
num = gets.chomp
p num.to_i * 10

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

print "Enter a word: "
w1 = gets.chomp
print "Enter another word: "
w2 = gets.chomp
p w1.upcase + " " + w2.upcase

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

print "Enter a word: "
word = gets.chomp
p word.length

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

print "Enter a number: "
num = gets.chomp
if num.to_i < 0
  p "That's a negative number"
end

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

print "Enter a number: "
n1 = gets.chomp
print "Enter another number: "
n2 = gets.chomp
p n1.to_i * n2.to_i

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

print "Enter a word: "
word = gets.chomp
if word.length > 5
  p "That's a long word"
end

# SOLUTIONS: https://gist.github.com/peterxjang/1539a3ad79728ba4fb68dd8d07279c29

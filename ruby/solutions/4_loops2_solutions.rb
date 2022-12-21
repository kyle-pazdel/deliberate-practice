# Create a loop which modifies a variable each time the loop runs from memory
# FOR LOOPS

# 1. Write a while loop to print the numbers 1 through 10.

for i in 1..10
  puts i
end

# 2. Write a while loop that prints the word "hello" 5 times.
word = "hello"
for i in 1..5
  puts word
end

# 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

response = ""
until response.downcase == "stop"
  print "Enter a word: "
  response = gets.chomp
end

# 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

for i in (0..100).step(5)
  puts i
end

# 5. Write a while loop that prints the number 9000 ten times.

for i in 1..10
  puts 9000
end

# 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

response = ""
until response.to_i > 10
  print "Enter a number: "
  response = gets.chomp
end

# 7. Write a while loop that prints the numbers 50 to 70.

for i in 50..70
  puts i
end

# 8. Write a while loop that prints the phrase "Around the world" 144 times.

for i in 1..144
  puts "#{i}: Around the world"
end

# 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

response = ""
until response.length > 5
  print "Enter a word: "
  response = gets.chomp
end

# 10. Write a while loop that prints the even numbers from 2 to 40.

for i in (2..40).step(2)
  puts i
end

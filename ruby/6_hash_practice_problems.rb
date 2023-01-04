# Create a hash, read items from a hash, and add new items to existing hash from memory

# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

hash = { "fn" => "John", "ln" => "Doe", "email" => "john@test.com" }
puts "#{hash["fn"]} #{hash["ln"]} at #{hash["email"]}"

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [{ "fn" => "person1", "ln" => "person1" }, { "fn" => "person2", "ln" => "person2" }, { "fn" => "person3", "ln" => "person3" }]
puts people[0]["fn"] + " " + people[0]["ln"]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

menu = { "apple" => 1.05, "banana" => 2.23, "orange" => 5.45 }
menu["kiwi"] = 0.30
p menu

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = { "title" => "title1", "author" => "author1", "pages" => "100", "language" => "language1" }
puts "#{book["title"]} by #{book["author"]} has #{book["pages"]} pages, and is written in #{book["language"]}"

# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [{ "title" => "`book1", "author" => "`book1" }, { "title" => "book2", "author" => "book2" }, { "title" => "book3", "author" => "book3" }]
puts books[2]["author"]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

states = { "state1" => "cap1", "state2" => "cap2", "state3" => "cap3" }
states["state4"] = "cap4"
p states

# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = { "brand" => "brand1", "model" => "model1", "year" => "2022" }
p laptop["brand"]
p laptop["model"]
p laptop["year"]

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [{ "brand" => "brand1", "model" => "model1" }, { "brand" => "brand2", "model" => "model2" }, { "brand" => "model3", "model" => "model3" }]
puts laptops[1]["model"]

# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

dictionary = { "word1" => "defintion of word 1", "word2" => "definition of word2" }
dictionary["word3"] = "definition of word3"
p dictionary

# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = { "brand" => "brand1", "color" => "color1", "size" => "size1" }
puts shirt["brand"]
puts shirt["color"]
puts shirt["size"]

# SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb

# Create a hash, read items from a hash, and add new items to existing hash from memory

# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = { "fn" => "Kyle", "ln" => "Pazdel", "email" => "kyle@test.com" }
puts person["fn"]
puts person["ln"]
puts person["email"]

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [{ "fn" => "Fn1", "ln" => "Ln1" }, { "fn" => "Fn2", "ln" => "Ln2" }, { "fn" => "Fn3", "ln" => "Ln3" }]
puts people[0]["fn"] + " " + people[0]["ln"]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

menu = { "item1" => 1.00, "item2" => 2.00, "item3" => 3.00 }
menu["item4"] = 4.00
p menu

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = { "title" => "Book Title", "author" => "Book Author", "pages" => "Book Page Count", "language" => "Book Language" }
puts book["title"]
puts book["author"]
puts book["pages"]
puts book["language"]

# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [{ "title" => "Title One", "author" => "Author One" }, { "title" => "Title Two", "author" => "Author Two" }, { "title" => "Title Three", "author" => "Author Three" }]

puts books[2]["author"]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

capitals = { "state1" => "Capital One", "state2" => "Capital Two", "state3" => "Capital Three" }
capitals["state4"] = "Capital Four"
p capitals

# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = { "brand" => "Laptop Brand", "model" => "Laptop Model", "year" => "Laptop Year" }
puts laptop["brand"]
puts laptop["model"]
puts laptop["year"]

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [{ "brand" => "Brand One", "model" => "Model One" }, { "brand" => "Brand Two", "model" => "Model Two" }, { "brand" => "Brand Three", "model" => "Model Three" }]
puts laptops[1]["model"]

# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

definitions = { "word1" => "Definition one...", "word2" => "Definition two..." }
definitions["word3"] = "Definition three..."
p definitions

# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = { "brand" => "Shirt Brand", "color" => "Shirt Color", "size" => "Shirt Size" }
puts shirt["brand"]
puts shirt["color"]
puts shirt["size"]

# SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb

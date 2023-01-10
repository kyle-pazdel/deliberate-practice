# Create a dictionary, read items from a dictionary, and add new items to existing dictionary from memory

# 1. Make a dictionary to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = {"fn": "First Name", "ln": "Last Name", "email": "Email@email.com"}
print(person["fn"])
print(person["ln"])
print(person["email"])

# 2. Make an array of dictionaries to store the first name and last name for 3 different people. Then print out the first person's info.

people = [{"fn": "First Name One", "ln": "Last Name One"}, {"fn": "First Name Two",
                                                            "ln": "Last Name Two"}, {"fn": "First Name Three", "ln": "Last Name Three"}]
print(people[0]["fn"] + " " + people[0]["ln"])

# 3. Make a dictionary to store prices for 3 different menu items. Then add a new menu item and price and print the dictionary to see the result.

menu = {"item1": 1.00, "item2": 2.00, "item3": 3.00}
menu["item4"] = 4.00
print(menu)

# 4. Make a dictionary to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {"title": "Book Title", "author": "Book Author",
        "pages": "Book Page Count", "language": "Book Language"}
print(book["title"])
print(book["author"])
print(book["pages"])
print(book["language"])

# 5. Make an array of dictionaries to store the title and author for 3 different books. Then print out the third book's author.

books = [{"title": "Book Title One", "author": "Book Author One"}, {"title": "Book Title Two",
                                                                    "author": "Book Author Two"}, {"title": "Book Title Three", "author": "Book Author Three"}]
print(books[2]["author"])

# 6. Make a dictionary to store 3 different states and their captitals. Then add a new state and capital and print the dictionary to see the result.

capitals = {"state1": "Capital One",
            "state2": "Capital Two", "state3": "Capital 3"}
capitals["state4"] = "Capital Four"
print(capitals)

# 7. Make a dictionary to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = {"brand": "Laptop Brand",
          "model": "Laptop Model", "year": "Laptop Year"}
print(laptop["brand"])
print(laptop["model"])
print(laptop["year"])

# 8. Make an array of dictionaries to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [{"brand": "Brand One", "model": "Model One"}, {"brand": "Brand Two",
                                                          "model": "Model Two"}, {"brand": "Brand Three", "model": "Model Three"}]
print(laptops[1]["model"])

# 9. Make a dictionary to store definitions for 2 different words. Then add a new word and definition and print the dictionary to see the result.

dictionary = {"word1": "Definition of word one...",
              "word2": "Definition of word two..."}
dictionary["word3"] = "Definition of word three..."
print(dictionary)

# 10. Make a dictionary to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = {"brand": "Shirt Brand", "color": "Shirt Color", "size": "Shirt Size"}
print(shirt["brand"])
print(shirt["color"])
print(shirt["size"])


# SOLUTIONS: tbd

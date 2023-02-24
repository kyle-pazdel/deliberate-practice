// Create an object, read items from an object, and add new items to existing object from memory

// 1. Make an object to store a person's first name, last name, and email address. Then print each attribute on separate lines.

person = { fname: "Kyle", lname: "Pazdel", email: "kyle@email.com" };
console.log(person.fname);
console.log(person.lname);
console.log(person.email);

// 2. Make an array of objects to store the first name and last name for 3 different people. Then print out the first person's info.

people = [
  { fname: "Kyle", lname: "Pazdel" },
  { fname: "Alex", lname: "Pazdel" },
  { fname: "Darelyn", lname: "Pazdel" },
];
console.log(people[0].fname + " " + people[0].lname);

// 3. Make an object to store prices for 3 different menu items. Then add a new menu item and price and print the object to see the result.

menu = { itemOne: 3.5, itemTwo: 2.5, itemThree: 1.5 };
menu.itemFour = 0.5;
console.log(menu);

// 4. Make an object to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = { title: "Book Title", author: "Book Author", pageCount: "Book Page Count" };
console.log(book.title);
console.log(book.author);
console.log(book.pageCount);

// 5. Make an array of objects to store the title and author for 3 different books. Then print out the third book's author.

books = [
  { title: "Book One", author: "Author One" },
  { title: "Book Two", author: "Author Two" },
  { title: "Book Three", author: "Author Three" },
];
console.log(books[2].author);

// 6. Make an object to store 3 different states and their captitals. Then add a new state and capital and print the object to see the result.

states = { stateOne: "Capital One", stateTwo: "Capital Two", stateThree: "Capital Three" };
states.stateFour = "Capital Four";
console.log(states);

// 7. Make an object to store a laptop's brand, model, and year. Then print each attribute on separate lines.

laptop = { brand: "Laptop Brand", model: "Laptop Model", year: "Laptop Year" };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// 8. Make an array of objects to store the brand and model for 3 different laptops. Then print out the second laptop's model.

laptops = [
  { brand: "Laptop One Brand", model: "Laptop One Model" },
  { brand: "Laptop Two Brand", model: "Laptop Two Model" },
  { brand: "Laptop Three Brand", model: "Laptop Three Model" },
];
console.log(laptops[1].model);

// 9. Make an object to store definitions for 2 different words. Then add a new word and definition and print the object to see the result.

definitions = { wordOne: "Definition One", wordTwo: "Definition Two" };
definitions.wordThree = "Definition Three";
console.log(definitions);

// 10. Make an object to store a shirt's brand, color, and size. Then print each attribute on separate lines.

shirt = { brand: "Shirt Brand", color: "Shirt Color", size: "Shirt Size" };
console.log(shirt.brand);
console.log(shirt.color);
console.log(shirt.size);

// JavaScript solutions: https://gist.github.com/peterxjang/e2d0a5bc482473e0230427fe41e4d429

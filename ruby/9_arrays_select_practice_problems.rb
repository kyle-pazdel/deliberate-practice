# Select items from an array into a new array with items that match a certain condition

#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

arr = [2, 32, 80, 18, 12, 3]
new_arr = []
for i in arr
  if i < 20
    new_arr.append(i)
  end
end
p new_arr

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

strings = ["winner", "winner", "chicken", "dinner"]
new_arr = []
for i in strings
  first_letter = i[0]
  if first_letter.downcase == "w"
    new_arr.append(i)
  end
end
p new_arr

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
new_arr = []
for i in items
  if i[:price] > 5
    new_arr.append(i)
  end
end
p new_arr

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

arr = [2, 4, 5, 1, 8, 9, 7]
new_arr = []
for i in arr
  if i % 2 == 0
    new_arr.append(i)
  end
end
p new_arr

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

strings = ["a", "man", "a", "plan", "a", "canal", "panama"]
new_arr = []
for string in strings
  if string.length < 4
    new_arr.append(string)
  end
end
p new_arr

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
new_arr = []
for item in items
  if item[:name].length < 6
    new_arr.append(item)
  end
end
p new_arr

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

arr = [8, 23, 0, 44, 1980, 3]
new_arr = []
for num in arr
  if num < 10
    new_arr.append(num)
  end
end
p new_arr

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

strings = ["big", "little", "good", "bad"]
new_arr = []
for string in strings
  first_letter = string[0].downcase
  if first_letter != "b"
    new_arr.append(string)
  end
end
p new_arr

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
new_arr = []
for item in items
  if item[:price] < 10
    new_arr.append(item)
  end
end
p new_arr

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

arr = [2, 4, 5, 1, 8, 9, 7]
new_arr = []
for num in arr
  if num % 2 != 0
    new_arr.append(num)
  end
end
p new_arr

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
# SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761

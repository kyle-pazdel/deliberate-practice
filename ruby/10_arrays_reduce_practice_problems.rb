# Reduce an array to a single value based on some computation

#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

arr = [5, 10, 8, 3]
sum = 0
for i in arr
  sum += i
end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

arr = ["volleyball", "basketball", "badminton"]
combined = ""
for i in arr
  combined += i
end
p combined

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
sum = 0
for i in items
  sum += i[:price]
end
p sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

arr = [5, 10, 8, 3, 9]
min = arr[0]
for i in arr
  if i < min
    min = i
  end
end
p min

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

arr = ["volleyball", "basketball", "badminton"]
sum = 0
for i in arr
  sum += i.length
end
p sum

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
cheapest_item = items[0]
lowest_price = cheapest_item[:price]
for i in items
  price = i[:price]
  if price < lowest_price
    lowest_price = price
    cheapest_item = i
  end
end
p cheapest_item

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

arr = [5, 10, 8, 3]
product = arr[0]
i = 1
while i < arr.length
  product = product * arr[i]
  i += 1
end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

arr = ["volleyball", "basketball", "badminton"]
combined = "-"
for i in arr
  combined += "#{i}-"
end
p combined

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

items = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
shortest_named_item = items[0]
shortest_name = shortest_named_item[:name]
for i in items
  name = i[:name]
  if name < shortest_name
    shortest_name = name
    shortest_named_item = i
  end
end
p shortest_named_item

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

arr = [5, 10, 8, 3]
max = arr[0]
for i in arr
  if i > max
    max = i
  end
end
p max

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
# SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35

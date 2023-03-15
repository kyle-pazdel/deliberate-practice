# Select items from an list into a new list with items that match a certain condition

#  1. Start with an list of numbers and create a new list with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

arr = [2, 32, 80, 18, 12, 3]
result = []
for i in arr:
    if i < 20:
        result.append(i)
print(list(result))

#  2. Start with an list of strings and create a new list with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

arr = ["winner", "winner", "chicken", "dinner"]
result = []
for i in arr:
    if i[0].lower() == "w":
        result.append(i)
print(list(result))

#  3. Start with an list of dictionaries and create a new list with only the dictionaries with prices greater than 5 (from the :"price" key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes [{"name": "chair", "price": 100}].

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
result = []
for i in arr:
    if i["price"] > 5:
        result.append(i)
print(list(result))

#  4. Start with an list of numbers and create a new list with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

arr = [2, 4, 5, 1, 8, 9, 7]
result = []
for i in arr:
    if i % 2 == 0:
        result.append(i)
print(list(result))

#  5. Start with an list of strings and create a new list with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

arr = ["a", "man", "a", "plan", "a", "canal", "panama"]
result = []
for i in arr:
    if len(i) < 4:
        result.append(i)
print(list(result))


#  6. Start with an list of dictionaries and create a new list with only the dictionaries with names shorter than 6 letters (from the :name key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes [{"name": "chair", "price": 100}, {"name": "book", "price": 4}].

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
result = []
for i in arr:
    if len(i["name"]) < 6:
        result.append(i)
print(list(result))

#  7. Start with an list of numbers and create a new list with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

arr = [8, 23, 0, 44, 1980, 3]
result = []
for i in arr:
    if i < 10:
        result.append(i)
print(list(result))

#  8. Start with an list of strings and create a new list with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

arr = ["big", "little", "good", "bad"]
result = []
for i in arr:
    if i[0].lower() != "b":
        result.append(i)
print(list(result))

#  9. Start with an list of dictionaries and create a new list with only the dictionaries with "price"s less than 10 (from the :"price" key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes [{"name": "pencil", "price": 1}, {"name": "book", "price": 4}].

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
result = []
for i in arr:
    if i["price"] < 10:
        result.append(i)
print(list(result))


# 10. Start with an list of numbers and create a new list with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

arr = [2, 4, 5, 1, 8, 9, 7]
result = []
for i in arr:
    if i % 2 != 0:
        result.append(i)
print(list(result))

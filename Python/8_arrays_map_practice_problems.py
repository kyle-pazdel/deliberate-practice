# Map an array to a new array with some computation performed on each item

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

arr = [1, 2, 3]
res = map(lambda num: num * 3, arr)
print(list(res))

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

arr = ["hello", "goodbye"]
res = map(lambda string: string.upper(), arr)
print(list(res))

#  3. Start with an array of dictionaries and create a new array of string values from each dictionary's "name" key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes ["Alice", "Blane"].

arr = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
res = map(lambda person: person["name"], arr)
print(list(res))

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

arr = [1, 2, 3]
res = map(lambda num: num + 7, arr)
print(list(res))


#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

arr = ["hello", "goodbye"]
res = map(lambda string: len(string), arr)
print(list(res))

#  6. Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [27, 16].

arr = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
res = map(lambda person: person["age"], arr)
print(list(res))


#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

arr = [1, 2, 3]
res = map(lambda num: num / 2.0, arr)
print(list(res))

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

arr = ["hello", "goodbye"]
res = map(lambda string: string[0], arr)
print(list(res))

# 9.  Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key times 2.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [54, 32].

arr = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
res = map(lambda person: person["age"] * 2, arr)
print(list(res))

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

arr = [1, 2, 3]
res = map(lambda num: str(num), arr)
print(list(res))

# SOLUTIONS (using for loops): https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/8_arrays_map_solutions_for_loops.py
# SOLUTIONS (using map() shortcut): https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/8_arrays_map_solution_map_and_lambda.py
# SOLUTIONS (using .each shortcut): tbd

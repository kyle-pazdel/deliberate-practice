# Map an array to a new array with some computation performed on each item

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

array = [1, 2, 3]

new_array = map(lambda x: x * 3, array)
print(list(new_array))

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["hello", "goodbye"]
upcase_strings = map(lambda x: x.upper(), strings)
print(list(upcase_strings))

#  3. Start with an array of dictionaries and create a new array of string values from each dictionary's :name key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes ["Alice", "Blane"].

dictionaries = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
names = map(lambda person: person["name"], dictionaries)
print(list(names))


#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [1, 2, 3]
new_numbers = map(lambda x: x + 7, numbers)
print(list(new_numbers))

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["hello", "goodbye"]
character_count = map(lambda x: len(x), strings)
print(list(character_count))

#  6. Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [27, 16].

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
ages = map(lambda person: person["age"], people)
print(list(ages))


#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [1, 2, 3]
new_numbers = map(lambda num: num / 2.0, numbers)
print(list(new_numbers))

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["hello", "goodbye"]
first_letters = map(lambda string: string[0], strings)
print(list(first_letters))

# 9.  Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key times 2.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [54, 32].

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
ages_doubled = map(lambda person: person["age"] * 2, people)
print(list(ages_doubled))

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

array_of_integers = [1, 2, 3]
array_of_strings = map(lambda num: str(num), array_of_integers)
print(list(array_of_strings))

# SOLUTIONS (using while loop): tbd
# SOLUTIONS (using .each shortcut): tbd
# SOLUTIONS (using map() shortcut): https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/8_arrays_map_solution_map_and_lambda.py

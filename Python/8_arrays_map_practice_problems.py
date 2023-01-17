# Map an array to a new array with some computation performed on each item

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

array = [1, 2, 3]
new_array = []
for i in array:
    new_array.append(i * 3)

print(new_array)


#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

strings = ["hello", "goodbye"]
capitalized_strings = []
for string in strings:
    capitalized_strings.append(string.upper())
print(capitalized_strings)


#  3. Start with an array of dictionaries and create a new array of string values from each dictionary's :name key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes ["Alice", "Blane"].

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
names = []
for person in people:
    names.append(person["name"])
print(names)

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

numbers = [1, 2, 3]
new_numbers = []
for number in numbers:
    new_numbers.append(number + 7)

print(new_numbers)

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

strings = ["hello", "goodbye"]
string_lengths = []
for string in strings:
    string_lengths.append(len(string))
print(string_lengths)

#  6. Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [27, 16].

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
ages = []
for person in people:
    ages.append(person["age"])
print(ages)

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [1, 2, 3]
new_numbers = []
for number in numbers:
    new_numbers.append(number / 2.0)
print(new_numbers)

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

strings = ["hello", "goodbye"]
first_letters = []
for string in strings:
    first_letters.append(string[0])
print(first_letters)

# 9.  Start with an array of dictionaries and create a new array of number values from each dictionary's "age" key times 2.
#     For example, [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}] becomes [54, 32].

people = [{"name": "Alice", "age": 27}, {"name": "Blane", "age": 16}]
ages_doubled = []
for person in people:
    ages_doubled.append(person["age"] * 2)
print(ages_doubled)

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [1, 2, 3]
numbers_to_strings = []
for number in numbers:
    numbers_to_strings.append(str(number))
print(numbers_to_strings)

# SOLUTIONS (using for loops): https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/8_arrays_map_solutions_for_loops.py
# SOLUTIONS (using map() shortcut): https://github.com/kyle-pazdel/deliberate-practice/blob/main/Python/solutions/8_arrays_map_solution_map_and_lambda.py
# SOLUTIONS (using .each shortcut): tbd

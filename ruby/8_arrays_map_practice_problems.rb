# Map an array to a new array with some computation performed on each item

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

arr = [1, 2, 3]
new_arr = arr.map do |num|
  num * 3
end
p new_arr

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

array_of_strings = ["hello", "goodbye"]
uppercase_strings = array_of_strings.map do |string|
  string = string.upcase
end
p uppercase_strings

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
names = people.map do |person|
  name = person[:name]
end
p names

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

arr = [1, 2, 3]
new_arr = arr.map do |num|
  num = num + 7
end
p new_arr

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

array_of_strings = ["hello", "goodbye"]
strings_lengths = array_of_strings.map do |string|
  length = string.length
end
p strings_lengths

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
ages = people.map do |person|
  age = person[:age]
end
p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

array_of_numbers = [1, 2, 3]
new_array = array_of_numbers.map do |num|
  calculated = num.to_f / 2
end
p new_array

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

array_of_strings = ["hello", "goodbye"]
first_letters = array_of_strings.map do |string|
  first_letter = string[0]
end
p first_letters

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
ages_doubled = people.map do |person|
  age_doubled = person[:age] * 2
end
p ages_doubled

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

array_of_numbers = [1, 2, 3]
new_array = array_of_numbers.map do |num|
  num_to_string = num.to_s
end
p new_array

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98

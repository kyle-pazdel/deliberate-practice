# Map an array to a new array with some computation performed on each item

#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

arr = [1, 2, 3]
res = arr.map { |num| num * 3 }
p res

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

arr = ["hello", "goodbye"]
res = arr.map { |str| str.upcase }
p res

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

arr = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
res = arr.map { |person| person[:name] }
p res

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

arr = [1, 2, 3]
res = arr.map { |num| num + 7 }
p res

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

arr = ["hello", "goodbye"]
res = arr.map { |str| str.length }
p res

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

arr = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
res = arr.map { |person| person[:age] }
p res

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

arr = [1, 2, 3]
res = arr.map { |num| num / 2.0 }
p res

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

arr = ["hello", "goodbye"]
res = arr.map { |str| str[0] }
p res

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

arr = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
res = arr.map { |person| person[:age] * 2 }
p res

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

arr = [1, 2, 3]
res = arr.map { |num| num.to_s }
p res

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98

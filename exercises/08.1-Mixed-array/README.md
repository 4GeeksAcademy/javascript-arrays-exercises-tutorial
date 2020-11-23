---
tutorial: https://www.youtube.com/watch?v=3o02odJhieo
---

# `08.01` Mixed Array

Write a function to programmatically print in the console the types of the values that the list contains in each position.

The console must have something like this:
```md
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
```

## :bulb: Hint 

1. Create a new empty array.
2. Loop the original array.
3. On every loop get the type of the item using the typeof function.
4. Since the typeof function return a string you can push that string to the new array.
5. when the loop finished, you should have all the types found on the original array pushed to the new array.
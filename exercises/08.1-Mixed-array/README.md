---
tutorial: https://www.youtube.com/watch?v=3o02odJhieo
---

# `08.01` Mixed Array

## :pencil: Instructions: 
 
1. Write a function to programmatically print in the console the types of the values that the list contains in each position.

### Expected Result:

```md
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
```

## :bulb: Hint 

+ Create a new empty array.

+ Loop the original array.

+ On every loop get the type of the item using the `typeof` function.

+ Since the `typeof` function return a string you can push that string to the new array.

+ when the loop finished, you should have all the types found on the original array pushed to the new array.
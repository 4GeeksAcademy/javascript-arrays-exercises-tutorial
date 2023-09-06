---
tutorial: https://www.youtube.com/watch?v=3o02odJhieo
---

# `08.1` Mixed Array

## 📝 Instructions: 
 
1. Write a function that prints in the console a new array that contains all the types of data that the array `mix` contains in each position.

## 💻 Expected Result:

```js
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
```

## 💡 Hints:

+ Create a new empty array.

+ Loop the original array.

+ On every loop, get the type of the item using the `typeof` function.

+ Since the `typeof` function returns a string you can push that string to the new array.

+ When the loop is finished, you should have all the types found on the original array pushed to the new array.

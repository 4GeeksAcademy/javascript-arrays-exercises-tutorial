---
tutorial: https://www.youtube.com/watch?v=oLTidCuisew
---

# `07.2` Letter Counter

Our customer needs a program that counts the number of occurrences of each letter in a given string. I know that's weird, but they are very adamant. We need this asap! 

## 📝 Instructions:

1. Create an object where the letters are the properties and the values are the number of times that letter is repeated throughout the string. 

For example:

```js
const word = "Hello World";

// The console should print { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## 💡 Hints:

+ Loop the entire string.

+ On every iteration, check if the object `counts` has the letter initialized as a property.

+ If the letter has not been initialized, then do it and set its value equal to 1 (first time found).

+ If it was already initialized, just increment the property value by one.

+ Remember to ignore white spaces in the string.

+ To accurately count all letters, regardless of their casing, you should convert all letters to lowercase.

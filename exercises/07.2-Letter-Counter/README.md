---

tutorial: https://www.youtube.com/watch?v=oLTidCuisew

---

# `07.2` Contador de letras

Our customer needs a program that counts the letters repetitions in a given string, I know that's weird, but they are very adamant, We need this asap! 

## :pencil: Instructions:

1. Create an object were the letters are the properties and the values are the number of times that letter its repeated throughout the string. 

For example:

```js
const word = "Hello World";

// La consola debe imprimir { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## :bulb: Hint

+ Loop the entire string.

+ On every iteration check if the object `counts` has the letter inicialized as a property.

+ If its not initialized then do it and set the value equal to 1 (first time found).

+ If it was already initialized just increment the property value in one.

+ Remember to ignore white spaces in the string.

+ You should lower case all letters to have an accurate count of all letters regardless of casing of the letter.
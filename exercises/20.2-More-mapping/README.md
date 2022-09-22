# `20.2` More Mapping

The `array.map()` method calls a function for each value in an array and then outputs a new array with the modified values. 

```js
incrementByOne = function (number) {
  return number + 1; 
}

let myArray = [1, 2, 3, 4];

myArray.map(incrementByOne); //returns [2, 3, 4, 5]
```

## 📝 Instructions:

1. Create a function named `myFunction` that will multiply each number by 3. 

2. Use the `array.map()` function to run the `myFunction` function through each value in the array. 

3. Store the new array in a variable named `newArray` and `console.log()` the new array. 

## 💡 Hint:

+ The function will take a parameter with the original item being transformed and added into the new array.

+ Remember that your function must return each of the new items to be stored into the new array.


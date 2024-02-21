# `16` Minimum integer

It is possible to traverse an array using the `array.forEach()` method. You have to specify what to do on each iteration of the loop.

```js
myArray.forEach(function(item, index, arr) {
	console.log(item, index) 	
// item will be the value of each item.
// index will be the item's index.
// arr will be the array object to which the element belongs to. 
});
```

## 📝 Instructions:

1. Please use the `forEach()` method to get the minimum value of the array and print it in the console.

## 💡 Hints:

- Declare an auxiliary global variable.

- Set its value to a very big integer.

- Every time you loop, compare its value to the item value, if the item value is smaller, update the auxiliary variable's value to the item value.

- Outside the loop, after the loop is finished, print the auxiliary value.

## 💻 Expected result:

```js
23
```

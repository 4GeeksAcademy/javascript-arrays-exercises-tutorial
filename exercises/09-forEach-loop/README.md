# `09` forEach Loop

Instead of using the classic `for` statement, there is a new way to loop arrays called [higher order functions](https://www.youtube.com/watch?v=rRgD1yVwIvE).

It is possible to loop an array using the `array.forEach` function. You have to specify what to do on each iteration of the loop.

```js
myArray.forEach(function(item, index, arr){
		
});
/**
 * item: will be the value of the specific item (required).
 * index: will be the item index(optional).
 * arr: will be the array object to which the element belongs to (optional).
*/


```

## :pencil: Instructions:

Right now, the code is printing all the items in the array:

1. Please change the function code to print only the numbers divisible by 14.

## :bulb: Hint:

A number X is divisible by 2 if: `(X%2===0)`.

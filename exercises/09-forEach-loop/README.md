# `09.1` forEach Loop

Instead of using the classic `for` statement, there is a new way to loop arrays called [higher order functions](https://www.youtube.com/watch?v=rRgD1yVwIvE)

It is possible to loop an array using the `array.forEach` function. You have to specify what to do on each iteration of the loop.

```js
/**
 * item: valor del elemento específico (requerido).
 * index: índice del elemento (opcional).
 * arr: objeto array al cual pertenece el elemento (opcional).
*/
myArray.forEach(function(item, index, arr){
		
});
```

## :pencil: Instructions:

Right now, the code is printing all the items in the array:

1. Please change the function code to print only the numbers divisible by 14.

## :bulb: Hint:

A number X is divisible by 2 if: (X%2===0)
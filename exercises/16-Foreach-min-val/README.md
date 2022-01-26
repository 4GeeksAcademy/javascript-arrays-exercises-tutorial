
# `16` Minimum integer:

It is possible to traverse an array using the `array.forEach` function. You have to specify what to do on each iteration of the loop.

```js

myArray.forEach(function(item, index){
	console.log(item, index) 	
//item will be the value of the specific item.
//index will be the item index.
//arr will be the array object to which the element belongs to. 
});

```


## 📝 Instructions:

1. Please use the `forEach` function to get the minimum value of the array and print it in the console.

### 💡 Hint:

- Declare an auxiliar global variable

- Set its value to a very big integer

- Every time you loop compare its value to the item value, if the item value is smaller update the auxiliar variable value to the item value.

- Outside of the loop, after the loop is finished, print the auxiliar value.


### Expected result:

```js
 23
 ```

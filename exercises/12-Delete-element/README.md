# `12` Delete element

One of the ways to delete `Daniella` from the array (without cheating) will be to create a new list with all the other people but `Daniella`. 

That happens to be the default behavior of the `array.filter()` method which you should know. Similar to the `array.forEach()` and `array.map()` methods, it is a higher-order function, which means that it calls another function to achieve its goals. 

That secondary **callback** function is called by the `array.filter()` with up to three parameters (which are optional) and the returned value can only be one thing - a condition:

```js
(elementBeingIterated, indexOfThatElement, theIteratedArray) => condition;
```

So if you want to keep only the numbers 2 and 4 from an array of numbers, your filter method would look like this:

```js
let array = [2, 9, 5, 6, 4, 1, 2, 3, 4];

let newArray = array.filter((element) => element === 2 || element === 4);
console.log(newArray); // outcome is [2, 4, 2, 4]
```

The `array.filter()` method automatically creates a new array in which only the elements that pass the condition are kept. Any other elements are dropped from the `newArray`. 

You can learn more about this method [here](https://www.w3schools.com/jsref/jsref_filter.asp)

## Instructions:

1. Please create a `deletePerson` function that "deletes" any given person from an array and returns a new array without that person.


## Expected result:

 ```js 
['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak', 'emilio']
['ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio']
['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
```

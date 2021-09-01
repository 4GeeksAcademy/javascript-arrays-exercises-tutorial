# `08.2` Count On

As you saw in the last exercise your array can be a mix of data types.

## :pencil: Instructions:

1. Add all the items with data type 'object' into the `hello` array.

Here is how to print all the items.

```js
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

for(let index = 0; index < myArray.length; index++){
    let item = myArray[index];
    console.log(typeof(item))
}
```

## :bulb: Hint:

+ Loop the given array.

+ Add a condition inside the loop that checks for the item to be an object.

+ If the item is an object, add it to the `hello` array.

+ Console log the array `hello`.

# `08.2` Count On

As you saw in the last exercise your array can be a mix types of data.

# :pencil: Instructions

Add all the items with data-type object into the hello array?

Here is how to print ALL the items.

```js
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

for(let index = 0; index < myArray.length; index++){
    let item = myArray[index];
    console.log(typeof(item))
}
```

## :bulb: Hint

1. Loop the given array
2. Add a condition inside the loop that checks for the item to be an object.
4. If the item is an object, added to the `hello` array.
3. Console log the variable hello

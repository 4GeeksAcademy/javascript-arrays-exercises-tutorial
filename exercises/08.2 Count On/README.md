Count On
As you saw in the last exercise your array can be a mix types of data we are going to divide and conquer.

Would you be so kind to add all the items with data-type object into the hello array?

Here is how to print ALL the items.
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

for(let index = 0; index < myArray.length; index++){
    let item = myArray[index];
    console.log(typeof item)
}


Instructions
Loop the given array
Push the arrays found to an new array called hello
Console log the variable hello

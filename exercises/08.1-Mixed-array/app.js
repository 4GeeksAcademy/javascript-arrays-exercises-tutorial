let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arrayOfTypes = [];
for (let i in mix) {
    // console.log(typeof(mix[i]));
    arrayOfTypes.push(typeof(mix[i]));
}

console.log(arrayOfTypes);
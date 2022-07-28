let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arrayOfTypes = []
for (let i = 0; i < mix.length; i++) {
    const element = mix[i];
    arrayOfTypes.push(typeof element)
    
}
console.log(arrayOfTypes)
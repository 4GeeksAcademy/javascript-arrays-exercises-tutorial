let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// let types =[]

// for(let i=0; i < mix.length; i++){
//   types = typeof(mix[i])
// }
// console.log(types)


let types =[]

for(let i=0; i < mix.length; i++){
  const item = mix[i]
  types.push(typeof item)
}

 console.log(types)
let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    // This array will contain items from both original arrays
    let newArray = []
    
    // Loop the first array and push each item to newArray
    firstArray.forEach(item => {
        newArray.push(item)
    })
    // Loop the second array and push each item to newArray
    secondArray.forEach(item => {
        newArray.push(item)
    })

    // return merged array
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));

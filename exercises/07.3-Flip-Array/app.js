let arr = [45,67,87,23,5,32,60];

//Your code here.
// newArr = [];
// for (let i in arr) {
//     newArr.unshift(arr[i]);
// }


// newArr = [];
// for (let i = arr.length-1; i >- 1; i--) {
//     newArr.push(arr[i]);
//     // console.log(arr[i]);
// }

// console.log(newArr);


let flippedArray = []
for(let i = arr.length - 1; i>= 0;i--){
    let item = arr[i];
    flippedArray.push(item);
}
console.log(flippedArray)
let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************

for(let i = 0; i<10; i++){
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

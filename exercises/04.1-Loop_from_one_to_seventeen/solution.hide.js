//you code here
for(let i = 1; i <= 17; i = i + 1){
    console.log(i)
}

let listOfHellos = new Array(17).fill("hello");
for(let pos in listOfHellos){
    console.log(parseInt(pos)+1)
}
console.log("Third approach")
listOfHellos.forEach((item, index) => {
    console.log(parseInt(index)+1)
})
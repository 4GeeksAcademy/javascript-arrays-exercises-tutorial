function generateRandomArray()
{
	let auxArray = [];
	let randomLength = Math.floor(Math.random()*100);
	for(let i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
let myStupidArray = generateRandomArray();

//                0.        1.       2
let theLastOne = myStupidArray[myStupidArray.length - 1];
console.log(theLastOne)


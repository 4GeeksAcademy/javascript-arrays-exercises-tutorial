function sumTheElements(theArray){
	let total = 0;
	//your code here
	for (let i in theArray) {
		total += theArray[i];
	}
	return total;
}


console.log(sumTheElements([2,13,34,5]))


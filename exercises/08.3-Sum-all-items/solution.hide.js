function sumTheElements(sumArray){
	
	sumArray =[2,13,34,5]
	let total = 0;
	
	//your code here
	for (let i = 0; i < sumArray.length; i++) {
		
		total += sumArray[i]
	}

	return total;
}
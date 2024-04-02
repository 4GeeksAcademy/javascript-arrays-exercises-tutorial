let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here

function mergeTwoList(listOfNumbers){
    let numbers = []
    let even = []
    let odd = []
  
  for(let i = 0; i < listOfNumbers.length; i++){
    if(listOfNumbers[i] % 2 === 0){
      even.push(listOfNumbers[i]) 
    }else{
      odd.push(listOfNumbers[i])
    }
  }
    numbers = odd.concat(even)
    return numbers
}
// Your code here
mergeTwoList(listOfNumbers)
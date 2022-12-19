// Add your code here
function lyricsGenerator(arr){
    let finalString = ""
    let countOne = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            finalString += "Boom "
            countOne = 0
        }else if(arr[i] == 1){
            finalString += "Drop the base "
            countOne += 1

            if(countOne === 3){
                finalString += "!!!Break the base!!! "
            }
        }
    }
    
    return finalString
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
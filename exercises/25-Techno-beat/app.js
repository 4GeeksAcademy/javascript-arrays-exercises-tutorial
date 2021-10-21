function lyricsGenerator(arr) {
    var lyric = "";
    var counter = 0;
    
    for(var i=0; i<arr.length; i++) {
        
        if (arr[i] === 0) {
            lyric += "Boom "
        } else if (arr[i] === 1) {
            lyric += "Drop the base ";
            counter += 1;
            if (counter === 3) {
            counter = 0;
            lyric += "!!!Break the base!!! ";
            }
        }
    }
     return lyric; 
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
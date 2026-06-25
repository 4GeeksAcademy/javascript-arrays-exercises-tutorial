// Your code here
function lyricsGenerator (array){
  
  let cadenaDJ = "";
  let   contador = 0;
  for (let i = 0; i<= array.length; i++){
    if (array[i]===0 ){
         contador = 0;
         cadenaDJ += 'Boom';
        }
  else if (array[i]===1 ) {
         contador += 1;
         cadenaDJ += 'Drop the bass';
         if (contador ===3){
            cadenaDJ += '¡¡¡Break the bass!!!';
           
        
         }
       }
}
return cadenaDJ;

}



// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))

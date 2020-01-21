It is possible to traverse an array using the array.forEach function- you have to specify what to do on each iteration of the loop.

//item will be the value of the specific item.
//index will be the item index.
//arr will be the 
myArray.forEach(function(item, index, arr){
	console.log(item, index);	

});

Instructions
Please use the forEach function to get the minimum value of the array and print it in the console.

HINT
1) Declare an auxiliar global variable
2) Set its value to a very big integer
3) Every time you loop compare its value to the item value, if the item value is smaller update the auxiliar variable value to the item value.
4) Outside of the loop, after the loop is finished, print the auxiliar value.

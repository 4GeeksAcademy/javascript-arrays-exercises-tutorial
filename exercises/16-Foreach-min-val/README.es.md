Es posible atravesar una arreglo usando la función array.forEach; debes especificar qué hacer en cada iteración del bucle.

//item will be the value of the specific item.
//index will be the item index.
//arr will be the 
myArray.forEach(function(item, index, arr){
	console.log(item, index);	

});

Instrucciones
Utiliza la función forEach para obtener el valor mínimo del arreglo e imprimirlo en la consola.

Pista
1) Declarar una variable global auxiliar
2) Establece un valor de un entero muy grande
3) Cada vez que realices un loop(bucle), compara su valor con el valor del elemento, si el valor del elemento es menor, actualiza el valor de la variable auxiliar al valor del elemento.
4) Fuera del bucle, una vez finalizado el bucle, imprima el valor auxiliar.

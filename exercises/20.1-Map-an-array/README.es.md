La función Array.map () es una de las funciones más utilizadas en Javascript. Es sorprendente porque te permite crear un nuevo arreglo utilizando cada elemento del arreglo original como semilla.

En este ejemplo, estamos utilizando la función de map para crear un nuevo arreglo de horas civiles a partir de un arreglo determinado de horas militares.

```js
// Dado un arreglo de horas militares
var militaryHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

// Primero define una función que recibe MilitaryHours y devuelve su equivalente en tiempo civil
var militaryToCivilian = function(hour){
	if(hour==12) return hour + "pm";
	else if(hour==24) return hour-12 + "am";
	else if(hour > 11) return hour-12 + "pm";
	else return hour + "am";
}

// puedes crear una nueva hora civil mapeando el arreglo original pero pasando la función militaryToCivilian a la función map
var civilianHours = militaryHours.map(militaryToCivilian);

console.log(civilianHours);
```

Copie y pegue el código dentro del editor de código para probarlo si lo desea.

Instrucciones
Usando la misma lógica dada en el ejemplo, agrega el código necesario para convertir un arreglo de valores Celsius en Fahrenheit dentro de la función de map.

Pista
Aquí hay un video de 3:40 min que explica la función del map
https://www.youtube.com/watch?v=hfYa4ugeyuc&t=32s
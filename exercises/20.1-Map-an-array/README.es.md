# `20.1` Mapea un array

La función `array.map()` es una de las funciones más utilizadas en Javascript. Es sorprendente porque te permite crear un nuevo arreglo utilizando cada elemento del arreglo original como semilla.

En este ejemplo, estamos utilizando la función de `array.map()` para crear un nuevo arreglo de horas civiles a partir de un arreglo dado de horas militares.

```js
// Dado un arreglo de horas militares
let militaryHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

// Primero define una función que recibe MilitaryHours y devuelve su equivalente en tiempo civil
let militaryToCivilian = function(hour){
	if(hour==12) return hour + "pm";
	else if(hour==24) return hour-12 + "am";
	else if(hour > 11) return hour-12 + "pm";
	else return hour + "am";
}

//puedes crear una nueva hora civil mapeando el arreglo original pero pasando la función militaryToCivilian a la función map
let civilianHours = militaryHours.map(militaryToCivilian);

console.log(civilianHours);
```

Copia y pega el código dentro del editor de código para probarlo si quieres.

## 📝 Instrucciones:

1. Usando una lógica similar a la dada en el ejemplo, agrega el código necesario para convertir un arreglo de valores `Celsius` en `Fahrenheit` dentro de la función de `array.map()`.

## 💡 Pista:

+ Aquí hay un video de 3:40 min que explica la función del map:

https://www.youtube.com/watch?v=hfYa4ugeyuc&t=32s

+ Solo hace falta convertir los numeros. No hay necesida de añadir la unidad de medida (F° o C°).
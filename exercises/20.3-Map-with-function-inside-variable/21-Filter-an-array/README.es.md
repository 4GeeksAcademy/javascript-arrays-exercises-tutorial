Otra función sorprendente para los arreglos es el filtro. Repite toda el arreglo original y solo devuelve los valores que coinciden con una condición particular.

[Aquí está la documentación de la función de filtro en w3school](https://www.w3schools.com/jsref/jsref_filter.asp)

Por ejemplo, este algoritmo filtra el arreglo allNumbers y devuelve un nuevo arreglo con solo los números impares:

```js
var allNumbers = [23,12,35,5,3,2,3,54,3,21,534,23,42,1];

var onlyOdds = allNumbers.filter(function(number){
	return (number % 2 > 0)
});

console.log(onlyOdds);
```

Instrucciones
Completa el código para que llene el arreglo resultante de Nombres con solo los nombres que comienzan con la letra R
Usa la función Array.filter

Pista:
Aquí hay un video de 2:29min explicando array.filter
https://www.youtube.com/watch?v=0qsFDFC2oEE
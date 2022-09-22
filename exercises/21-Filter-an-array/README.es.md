# `21` Filter an Array

Otra función sorprendente para los arreglos o arrays es `array.filter()` (filtrar). Recorre toda el arreglo original y solo devuelve los valores que coinciden con una condición particular.

[Aquí está la documentación de la función `filter` en w3school](https://www.w3schools.com/jsref/jsref_filter.asp)

Por ejemplo, este algoritmo filtra el arreglo `allNumbers` y devuelve un nuevo arreglo con solo los números impares:

```js
let allNumbers = [23,12,35,5,3,2,3,54,3,21,534,23,42,1];

let onlyOdds = allNumbers.filter(function(number){
	return (number % 2 > 0)
});

console.log(onlyOdds);
```

## 📝 Instrucciones:

1. Completa el código para que llene el arreglo `resultingNames` con solo los nombres que comienzan con la letra R.

2. Usa la función `array.filter()`.

## 💡 Pista:

+ Aquí hay un video de 2:29 min explicando la [función `array.filter()`](https://www.youtube.com/watch?v=0qsFDFC2oEE9)

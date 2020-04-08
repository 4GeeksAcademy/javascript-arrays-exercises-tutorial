# `09.1` forEach Loop

En lugar de usar la clásica declaración `for`, hay una nueva forma de recorrer los arreglos llamados [(funciones de orden superior) higher order functions](https://www.youtube.com/watch?v=rRgD1yVwIvE)

Es posible recorrer un arreglo usando la función `array.forEach`. Debes especificar qué hacer en cada iteración del bucle.

```js
/**
 * item: will be the value of the specific item.
 * index: will be the item index.
 * arr: will be the 
*/
myArray.forEach(function(item, index, arr){
		
});
```

# :pencil: Instrucciones

En este momento, el código está imprimiendo todos los elementos en el arreglo. Cambia el código de la función para imprimir solo los números divisibles por 14.

## :bulb: Pista

Un número X es divisible por 2 si: (X%2===0)
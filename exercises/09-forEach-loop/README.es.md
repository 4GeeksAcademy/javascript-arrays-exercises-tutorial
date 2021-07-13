# `09.1` Bucle/loop forEach 

En lugar de usar la clásica declaración `for`, hay una nueva forma de recorrer los arreglos: [ higher order functions (funciones de orden superior) ](https://www.youtube.com/watch?v=rRgD1yVwIvE)

Es posible recorrer un arreglo usando la función `array.forEach`. Debes especificar qué hacer en cada iteración del bucle.

```js
/**
 * item: will be the value of the specific item (required).
 * index: will be the item index(optional).
 * arr: will be the array object to which the element belongs to (opcional).
*/
myArray.forEach(function(item, index, arr){
		
});
```

## :pencil: Instrucciones:

En este momento, el código está imprimiendo todos los elementos en el arreglo o array: 

1. Cambia el código de la función para imprimir solo los números divisibles por 14.

## :bulb: Pista:

Un número X es divisible por 2 si: (X%2===0)
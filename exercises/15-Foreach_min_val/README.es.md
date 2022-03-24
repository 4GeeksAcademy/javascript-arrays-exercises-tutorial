# `15` Minimum integer:

Es posible recorrero una array usando la función `array.forEach()`. Debes especificar qué hacer en cada iteración del bucle.

```js
myArray.forEach(function(item, index, arr){
	console.log(item, index)
//item es el valor específico del elemento.
//index será el índice del elemento.
//arr será el array al cual pertenece el elemento.
});

```

## 📝 Instrucciones:

1. Utiliza la función `forEach` para obtener el valor mínimo del array e imprimirlo en la consola.

## Resultado esperado:

```js
23
```

## 💡 Pistas:

+ Declarar una variable global auxiliar

+ Establece un valor de un número entero muy grande.

+ Cada vez que realices un loop(bucle), compara su valor con el valor del numero entero grande, si el valor del elemento es menor, actualiza el valor de la variable auxiliar al valor del elemento.

+ Fuera del bucle, una vez finalizado el bucle, imprima el valor auxiliar.



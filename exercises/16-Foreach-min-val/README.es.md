# `16` Minimum integer

Es posible recorrer un arreglo usando el método `array.forEach()`. Debes especificar qué hacer en cada iteración del bucle.

```js
myArray.forEach(function(item, index, arr) {
	console.log(item, index)
// item es el valor de cada elemento.
// index será el índice del elemento.
// arr será el array al cual pertenece el elemento.
});
```

## 📝 Instrucciones:

1. Utiliza el método `forEach()` para obtener el valor mínimo del arreglo e imprimirlo en la consola.

## 💡 Pistas:

- Declara una variable global auxiliar.

- Establece su valor a un número entero muy grande.

- Cada vez que realices un bucle, compara su valor con el valor de la variable, si el valor del elemento es menor, actualiza el valor de la variable auxiliar al valor del elemento.

- Ya fuera del bucle, imprime el valor de la variable auxiliar.

## 💻 Resultado esperado:

```js
23
```

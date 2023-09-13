# `17` The For Loop Find average

Otra forma de recorrer un arreglo con el loop `for` es usando la declaración `of` de esta manera:

```js
for (let element of myArray) {
    console.log(element);
}
```

El bucle `for...of` te proporciona acceso directo a los elementos (como se muestra arriba), sin que tengas que utilizar el formato `array[index]` para acceder al valor de un elemento.

Esto hace que este tipo de bucle sea más sencillo de usar; sin embargo, no te proporciona acceso a los índices, por lo que si necesitas utilizar los índices de los elementos, no podrás hacerlo.

Puedes aprender más sobre este tipo de bucles aquí: 
[https://www.w3schools.com/js/js_loop_forof.asp](https://www.w3schools.com/js/js_loop_forof.asp)

## 📝 Instrucciones:

1. Calcula el valor promedio de todos los elementos del arreglo.

2. Imprímelo en la consola.

## 💡 Pista:

+ Para obtener el promedio, debes sumar todos los valores y dividir el resultado por la longitud total del arreglo.

## 💻 Resultado esperado:

```js
27278.8125
```

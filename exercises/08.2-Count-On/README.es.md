# `08.2` Count On
  
Como viste en el último ejercicio, tu arreglo o array puede tener una mezcla de tipos de datos.

## 📝 Instrucciones:

1. Agrega todos los elementos con tipo de dato objeto dentro del array `hello`.

Aquí puedes ver cómo imprimir los tipos de elementos:

```js
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    console.log(typeof(item))
}
```

## 💡 Pistas:

+ Recorre el array dado con un loop.

+ Agrega una condición dentro del bucle que verifique que el elemento sea un objeto.

+ Si el elemento es un objeto, se agrega al arreglo `hello`.

+ Usa `console.log()` para imprimir el array `hello` en la consola.

# `08.2` Count On

Como viste en el último ejercicio, tu arreglo puede tener una mezcla de tipos de datos.

# :pencil: Instrucciones

Agrega todos los elementos con tipo de dato objeto dentro del arreglo hello?
Add all the items with data-type object into the hello array?

Aquí se explica cómo imprimir TODOS los artículos.

```js
let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

for(let index = 0; index < myArray.length; index++){
    let item = myArray[index];
    console.log(typeof(item))
}
```

## :bulb: Pista

1. Recorre el arreglo dado.
2. Agregue una condición dentro del bucle que verifique que el elemento sea un objeto.
4. Si el elemento es un objeto, se agrega al arreglo `hello`.
3. Registrar la variable hello en la consola.

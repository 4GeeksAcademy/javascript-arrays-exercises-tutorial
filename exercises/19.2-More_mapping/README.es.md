# `19.2` More mapping

El método `array.map()` llama a una función para cada valor en un array y luego genera un nuevo array con los valores modificados.

## Ejemplo:

```js
incrementByOne = function (number) {
  return number + 1; 
}

var myArray = [1, 2, 3, 4];

myArray.map(incrementByOne); //devuelve [2, 3, 4, 5]
```

## 📝 Instrucciones:

1. Crea una función llamada `myFunction` que multiplique cada número por 3.

2. Usa la función `array.map()` para ejecutar la función `myFunction` a través de cada valor en el array.

3. Almacena el nuevo array en una variable llamada `newArray` y luego imprimes el nuevo array con `console.log()`.

## 💡 Pistas:

+ La función tomará un parámetro con el elemento original que se transforma y se agrega en el nuevo array.

+ Recuerda que tu función debe devolver cada uno de los nuevos elementos que se almacenarán en el nuevo array.


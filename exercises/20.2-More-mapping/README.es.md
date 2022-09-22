# `20.2` Sigamos "mapeando"

El método `array.map()` llama a una función para cada valor en un arreglo y luego genera un nuevo arreglo con los valores modificados.

```js
incrementByOne = function (number) {
  return number + 1; 
}

let myArray = [1, 2, 3, 4];

myArray.map(incrementByOne); //devuelve [2, 3, 4, 5]
```


## 📝 Instrucciones:

1. Crea una función llamada `myFunction` que multiplique cada número por 3.

2. Usa la función `array.map()` para ejecutar la función `myFunction` a través de cada valor en el arreglo.

3. Almacena el nuevo arreglo en una variable llamada `newArray` y luego imprimes el nuevo arreglo con `console.log()`.

## 💡 Pista:

+ La función tomará un parámetro con el elemento original que se transforma y se agrega en el nuevo arreglo.

+ Recuerda que tu función debe devolver cada uno de los nuevos elementos que se almacenarán en el nuevo arreglo.


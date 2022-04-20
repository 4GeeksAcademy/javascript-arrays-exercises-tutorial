# `12` Eliminar el elemento

La única forma de eliminar a `Daniella` del array o arreglo (sin hacer trampa) es crear un nuevo arreglo con todas las demás personas, excepto `Daniella`.

Así se comporta el método `array.filter()`. Similar a los métodos `array.forEach()` y `array.map()`, es una función de orden superior, lo que significa que llama a otra función para lograr sus objetivos. 

Esa funcion **callback** (de retorno) se llama `array.filter()` que acepta hasta 3 parámetros (opcionales) y el valor devuelto solo puede ser una cosa - una condición:

```js
(elementBeingIterated, indexOfThatElement, theIteratedArray) => condition;
```

Asi que si quieres quedarte solo con los números 2 y 4 del array o arreglo de números, tu método `array.filter()` se vería de esta forma:

```js
let array = [2, 9, 5, 6, 4, 1, 2, 3, 4];

let newArray = array.filter((element) => element === 2 || element === 4);
console.log(newArray); // resultado es [2, 4, 2, 4]
```

El método `array.filter()` automáticamente crea un nuevo array o arreglo (`newArray`) en el cual solo están los elementos que cumplan con la condición. El resto de los elements quedan fuera del `newArray`.  

Puedes aprender más sobre este método [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## 📝Instrucciones:

1. Crea una función `deletePerson` que "elimine" a cualquier persona del arreglo y devuelva un nuevo arreglo sin esa persona.

## Resultado esperado:

 ```js
 ['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak']
['ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
```

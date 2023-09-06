# `14` Divide and conquer

## 📝 Instrucciones:

1. Crea una función llamada `mergeTwoList` que reciba un arreglo de números (enteros).

2. Recorre el arreglo y separa los números **pares** e **impares** en diferentes arreglos.

3. Si el número es impar, envíalo a un arreglo denominado `odd`.

4. Si el número es par, envíalo a un arreglo denominado `even`.

5. La función debe retornar un nuevo arreglo que contenga los elementos de ambos arreglos `odd` y `even` en ese orden.

> Recuerda que el arreglo `odd` va primero y luego debes agregar los items del arreglo `even` usando el método `.concat()`.

Por ejemplo:

```js
mergeTwoList([1,2,33,10,20,4]);

// resultado esperado en la consola:
[1, 33, 2, 10, 20, 4]
```

## 💡 Pista:

+ Crea variables locales vacías o ***auxiliares*** cuando necesites almacenar datos dentro de una función.

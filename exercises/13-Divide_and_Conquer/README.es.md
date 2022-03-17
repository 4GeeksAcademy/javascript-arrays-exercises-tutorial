# `13` Divide and Conquer

## 📝 Instrucciones:

1. Crea una función llamada `mergeTwoList` que reciba un array de números (enteros).

2. Recorre el array y separa los números pares e impares en diferentes arrays.

3. Si el número es impar, envíalo a un array denominado `odd`.

4. Si el número es par, envíalo a un array denominado `even`.

5. Luego concatena el array `odd` al array `even` para combinarlos. 

> Recuerda que el array `odd` va primero y luego debes agregar los items del array `even`.

## Ejemplo:

```js
mergeTwoList([1,2,33,10,20,4]);

// resultado esperado en la consola:
[1, 33, 2, 10, 20, 4]
```

## 💡 Pista:

+ Crea variables vacías cuando necesites almacenar datos.
# `14` Divide y conquista

## 📝 Instrucciones:

1. Crea una función llamada `mergeTwoList` que reciba un arreglo de números (enteros).

2. Recorre el arreglo y separa los números pares e impares en diferentes arreglos.

3. Si el número es impar, envíalo a un arreglo denominado `odd`.

4. Si el número es par, envíalo a un arreglo denominado `even`.

5. Luego concatena el arreglo `odd` al arreglo `even` para combinarlos. 

> Recuerda que el arreglo `odd` va primero y luego debes agregar los items del arreglo `even` usando el método `.concat()`.

Ejemplo:

```js
mergeTwoList([1,2,33,10,20,4]);

// resultado esperado en la consola:
[1, 33, 2, 10, 20, 4]
```

### 💡 Pista:

+ Crea variables vacías cuando necesites almacenar datos.
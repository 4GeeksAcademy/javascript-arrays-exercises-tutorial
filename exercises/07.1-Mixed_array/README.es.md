# `07.1` Array mixto

## 📝 Instrucciones: 
 
1. Escribe una función que imprima un array en la consola que contenga los tipos de valores (data-types) que contiene el array `mix` en cada posición.

### Resultado esperado:

```js
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
```

## 💡 Pistas: 

+ Crea un nuevo array vacío.

+ Recorre el array original mediante un bucle.

+ En cada bucle, obten el tipo de elemento utilizando la función `typeof`.

+ Como la función `typeof` devuelve un string, puedes insertar(push) ese string en el nuevo array(array).

+ Cuando finalice el bucle o loop, debes haber encontrado todos los tipos de elementos del array o array original y haberlos insertados(push) en el nuevo array.
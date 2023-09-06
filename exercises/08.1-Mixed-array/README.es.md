# `08.1` Mixed Array

## 📝 Instrucciones: 
 
1. Escribe una función que imprima un arreglo en la consola que contenga los tipos de valores (data-types) que contiene el array `mix` en cada posición.

## 💻 Resultado esperado:

```js
[
  'number', 'boolean',
  'string', 'object',
  'string', 'number',
  'object'
]
```

## 💡 Pista 

+ Crea un nuevo arreglo vacío.

+ Recorre el arreglo original mediante un bucle.

+ En cada bucle, obten el tipo de elemento utilizando la función `typeof`.

+ Como la función `typeof` devuelve un string, puedes insertar(push) ese string en el nuevo arreglo.

+ Cuando finalice el bucle, debes haber encontrado todos los tipos de elementos del arreglo original y haberlos insertados(push) en el nuevo arreglo.

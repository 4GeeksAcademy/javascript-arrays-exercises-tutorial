# `08.01` Array mixto

## :pencil: Instrucciones: 
 
1. Escribe una función que imprima automáticamente en la consola los tipos de valores que contiene la lista en cada posición.

### Resultado esperado:

```md
number
boolean
string
object
string
number
object
```

## :bulb: Pista 

+ Crea un nuevo arreglo vacío.

+ Recorre el arreglo original mediante un bucle.

+ En cada bucle, obten el tipo de elemento utilizando la función `typeof`.

+ Como la función `typeof` devuelve un string, puedes insertar(push) ese string en el nuevo arreglo(array).

+ Cuando finalice el bucle o loop, debes haber encontrado todos los tipos de elementos del arreglo o array original y haberlos insertados(push) en el nuevo arreglo.
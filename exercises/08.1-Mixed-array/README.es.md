# `08.01` Mixed Array

Escribe una función que imprima automáticamente en la consola los tipos de valores que contiene la lista en cada posición.

The console must have something like this:
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

1. Crea un nuevo arreglo vacio.
2. Recorre el arreglo original mediante un bucle.
3. En cada bucle, obten el tipo de elemento utilizando la función typeof.
4. Como la función typeof devuelve un string, puedes insertar ese string en el nuevo arreglo.
5. Cuando finalice el ciclo, debes tener todos los tipos encontrados en el arreglo original insertados al nuevo arreglo.
# `20.5` "Mapeando" un arreglo de objetos

El escenario más común para la función de mapeo es para simplificar los arreglos dados, por ejemplo:

El algoritmo actual crea un arreglo con solo los nombres de las personas y los imprime en la consola.

## 📝 Instrucciones:

1. Actualiza la función `map` para que cree un arreglo donde cada elemento contenga lo siguiente:

```js
Hello, my name is Joe and I am 13 years old
```

## Resultado esperado:

Debe quedar algo similar a esto, sin embargo las edades pueden variar.

```js
[ 'Hello, my name is Joe and I am 36 years old',
  'Hello, my name is Bob and I am 47 years old',
  'Hello, my name is Erika and I am 33 years old',
  'Hello, my name is Dylan and I am 23 years old',
  'Hello, my name is Steve and I am 19 years old' ]
```

## 💡 Pista:

+ Debes determinar la edad de cada persona según su fecha de nacimiento (`birthDate`).

+ Busca en Google "Cómo obtener la edad de la fecha de nacimiento dada en JavaScript".

+ Recuerda la edad también depende del mes, si el mes de la fecha actual es mayor o igual al actual suma un año".

+ Dentro de tu función simplifier, debe devolver una concatenación.

## Resultado esperado:

```js
[ 'Hello, my name is Joe and I am 13 years old',
  'Hello, my name is Bob and I am 42 years old',
  'Hello, my name is Erika and I am 28 years old',
  'Hello, my name is Dylan and I am 18 years old',
  'Hello, my name is Steve and I am 14 years old' ]
```
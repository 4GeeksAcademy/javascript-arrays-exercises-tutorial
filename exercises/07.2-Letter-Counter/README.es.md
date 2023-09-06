# `07.2` Letter Counter

Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string dado. Sé que es extraño, pero es muy testarudo ¡Lo necesitamos lo antes posible!

## 📝 Instrucciones:

1. Crea un objeto donde las letras son las propiedades y los valores son el número de veces que esa letra se repite en toda la cadena. 

Por ejemplo:

```js
const word = "Hello World";

// Debería imprimir en la consola { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## 💡 Pistas:

+ Recorre todo el string (usa un bucle).

+ En cada iteración verifica si el objeto `counts` tiene la letra inicializada como una propiedad.

+ Si no está inicializada, hazlo y establece el valor en 1 (la primera vez que se encuentra).

+ Si ya se inicializó, simplemente incrementa el valor de la propiedad en uno.

+ Recuerda ignorar los espacios en blanco en el string.

+ Debes colocar en minúscula (lowercase) todas las letras para tener un conteo exacto de todas las letras.

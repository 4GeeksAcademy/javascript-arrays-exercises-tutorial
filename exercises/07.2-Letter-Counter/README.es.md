# `07.2` Letter Counter

Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string dada, sé que es extraño, pero son muy firmes. ¡Necesitamos esto lo antes posible!

# :pencil: Instrucciones

Crea un objeto donde las letras son las propiedades y los valores son el número de veces que esa letra se repite en toda la cadena. Por ejemplo:

```js
const word = "Hello World";

// Should print on the console { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## :bulb: Pista

1. Recorre todo el string.
2. En cada iteración verifique si el objeto "cuenta" tiene la letra inicializada como una propiedad.
3. Si no está inicializado, hazlo y establece el valor igual a 1 (la primera vez que se encuentra).
4. Si ya se inicializó, simplemente incremente el valor de la propiedad en uno.
5. Recuerda ignorar los espacios en blanco en la cadena.
6. Debes colocar en minúscula todas las letras para tener un conteo exacto de todas las letras.

<!-- hide -->
<div align="center">

# Ejercicios de arrays y loops de Javascript interactivos

<img width="560" alt="Portada del tutorial: las palabras Learn Javascript, Loops and Arrays, interactive, junto al logo hexagonal amarillo de JavaScript" src="https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/preview.png">

[![Tutorial certificado](https://img.shields.io/badge/4Geeks_Academy-Tutorial_certificado-2563eb)](https://4geeks.com/es/interactive-exercise/javascript-array-loops-exercises-es)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-43_ejercicios_autocorregidos-2563eb)](https://github.com/learnpack/learnpack)
[![Abrir en GitHub Codespaces](https://img.shields.io/badge/Abrir_en-GitHub_Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-arrays-exercises-tutorial)

Estas instrucciones también están [🇬🇧 en inglés](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/blob/HEAD/README.md)

</div>
<!-- endhide -->

Este tutorial reúne 44 ejercicios de JavaScript sobre arrays y bucles: una pantalla de bienvenida y 43 retos que se corrigen solos con Jest sobre Node.js. Practicarás `for`, `for...of`, `for...in`, `do...while`, `forEach`, `map` y `filter` con datos reales: matrices, objetos literales y arrays de objetos. Dura unas 12 horas, arranca desde `console.log()` y 17 ejercicios traen vídeo con la solución.

<!-- hide -->
## 📋 Ficha del tutorial

- **Dificultad:** fácil, pensado para quien nunca ha escrito un bucle.
- **Duración estimada:** 12 horas.
- **Tecnologías:** JavaScript, arrays, Node.js.
- **Ejercicios:** 44 carpetas, 43 de ellas con fichero de test.
- **Corrección:** automática, con Jest 29.7.0 y `rewire` para leer tus variables.
- **Vídeos de solución:** 17 ejercicios enlazan un vídeo explicativo.
- **Idiomas:** cada ejercicio trae instrucciones en español y en inglés.
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

El tutorial recorre toda la caja de herramientas de los bucles en JavaScript, con una idea pequeña por ejercicio:

- **Anatomía de un array:** los elementos, el `length` y los índices que empiezan en cero, además de leer y sustituir un valor por su posición.
- **El `for` de toda la vida:** recorrer hacia delante, hacia atrás, saltando de dos en dos y empezando por la mitad del array.
- **Condicionales dentro del bucle:** imprimir solo lo que cumple una condición, contar apariciones y acumular en variables auxiliares.
- **`do...while`:** el bucle que siempre se ejecuta al menos una vez, aplicado a una cuenta atrás que termina en `LIFTOFF`.
- **`for...of` y `for...in`:** acceso directo a los valores y recorrido de las propiedades de un objeto literal.
- **`forEach`:** iterar por efecto secundario, cuando el valor devuelto no importa.
- **`map`:** seis ejercicios dedicados (del 20.1 al 20.6) para transformar un array en otro del mismo tamaño.
- **`filter`:** quedarte solo con los elementos que cumplen una condición, incluidos arrays de objetos.
- **Arrays bidimensionales:** bucles anidados sobre matrices, coordenadas y el plano de un aparcamiento.

![Diagrama de un array de longitud 8: ocho casillas numeradas donde las etiquetas señalan las posiciones (índices del 0 al 7) y los elementos guardados en cada posición](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/DbmSOHT.png)

## 👀 ¿Qué vas a construir?

Cada ejercicio es un programa diminuto que completas dentro de `app.js`. Estos son algunos de los reales:

- **`07.1` Finding Waldo:** recorrer un array de 250 nombres e imprimir la posición donde se esconde `"Waldo"`, comparando con `toLowerCase()` para que dé igual si va en mayúsculas.
- **`07.2` Letter Counter:** recorrer un párrafo entero y rellenar un objeto `counts` donde cada letra es una clave y su valor es cuántas veces aparece, del estilo `{ h: 1, e: 1, l: 3, o: 2 }`, ignorando espacios y mayúsculas.
- **`11` DO DO DO:** contar de 20 a 1 con `do...while`, añadir un `!` a cada múltiplo de 5 e imprimir `LIFTOFF` en lugar del `0`.
- **`14` Divide and Conquer:** escribir `mergeTwoList()` para que `[1,2,33,10,20,4]` se convierta en `[1, 33, 2, 10, 20, 4]`, primero los impares.
- **`19` And one and two and three:** recorrer las propiedades de un objeto `contact` e imprimir líneas del estilo `fullName : John Doe`.
- **`22` Matrix Builder:** escribir `matrixBuilder(5)` para que devuelva una matriz de 5x5 rellena de ceros y unos aleatorios.
- **`23` Parking Lot:** escribir `getParkingLotState()`, que recibe cualquier matriz y devuelve `{ totalSlots, availableSlots, occupiedSlots }`.
- **`24` Making a UL:** encadenar `filter`, `map` y `forEach` sobre un array de objetos de colores para montar una única cadena `<ul>...</ul>`.
- **`25` Techno Beats:** escribir `lyricsGenerator()` para que `[0,0,1,1,0,0,0]` se convierta en `"Boom Boom Drop the bass Drop the bass Boom Boom Boom"`, añadiendo `!!!Break the bass!!!` cuando aparecen tres `1` seguidos.

![Esquema de un aparcamiento: el dibujo del parking junto al mismo parking representado como una rejilla de números, donde 1 significa ocupado, 2 significa libre y 0 significa que ahí no hay plaza](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/23.png)

## 🎓 ¿Qué necesitas antes de empezar?

- **Sintaxis básica de JavaScript:** variables, condicionales `if` y cómo se declara una función. El ejercicio `01` arranca en `console.log()`, así que no se da por sabido nada más.
- **Nada instalado si usas Codespaces:** el contenedor ya trae Node.js 22, Jest y la CLI de LearnPack listos.
- **Node.js solo si trabajas en local:** los ejercicios se ejecutan en Node, aquí no hay navegador ni DOM.
- **Ninguna experiencia previa con bucles:** la anatomía del array, los índices y el primer `for` se explican dentro del propio tutorial.
- **Nada de inglés:** los 44 ejercicios traen las instrucciones en español y en inglés, y el selector de banderas del menú cambia de idioma sin que pierdas tu progreso.

## ✅ ¿Cómo funciona la corrección automática?

43 de los 44 ejercicios tienen fichero de test (23 se llaman `test.js` y 20 `tests.js`); solo `00-Welcome`, la pantalla de bienvenida, no tiene. Al pulsar `Run`, la CLI de LearnPack ejecuta ese fichero con Jest y te dice qué comprobación ha fallado.

Los tests miran tres cosas distintas, y saber cuál está fallando te ahorra mucho tiempo:

1. **Lo que imprimes por consola.** `console.log` está simulado: cada llamada se guarda en un búfer y luego se compara con el resultado esperado.

2. **El código fuente de tu `app.js`.** Algunos ejercicios leen el fichero como texto y lo pasan por una expresión regular, así que el `09` exige literalmente `.forEach(` y el `07.1` exige tanto `for (` como `.toLowerCase(`.

3. **Tus variables y funciones, por su nombre.** Los tests cargan `app.js` con `rewire` y sacan valores de dentro, de modo que `deletePerson`, `matrixBuilder`, `resultingNames` o `coordinatesArray` deben conservar el nombre exacto que traen de fábrica.

> 💡 La corrección es estricta a propósito, pero es una guía, no un juez. Si te atascas, abre el menú de ejercicios, salta al siguiente y vuelve más tarde.

## 💡 ¿Qué errores conviene evitar?

1. **Imprimir cuando el ejercicio espera un `return`.** En el `25` Techno Beats el test llama a `lyricsGenerator([1,1,1])` y comprueba que lo devuelto sea la cadena `"Drop the bass Drop the bass Drop the bass !!!Break the bass!!!"`. Si terminas la función con `console.log(beats)` en vez de `return beats`, la función devuelve `undefined` y la comprobación falla. En el `12`, el `22` y el `23` pasa lo mismo: las llamadas a `console.log` ya vienen escritas al final del `app.js` y lo único que tienes que hacer es devolver el valor.

2. **Dejarte `console.log` de depuración.** Hay tests que cuentan las llamadas exactas: el `12` Delete element espera 3 y el `25` Techno Beats espera 5. Un print de más pone en rojo una solución correcta.

3. **Resolverlo con un método distinto al que se está enseñando.** Como los tests rebuscan en tu código fuente, cambiar el `forEach` del ejercicio `09` por un `for` falla aunque la salida por consola sea idéntica, y el `14` Divide and Conquer solo pasa si la palabra `concat` aparece en tu fichero.

4. **Renombrar o borrar las variables que vienen dadas.** `rewire` las busca por su nombre, así que si el `21` Filter an Array deja de declarar `resultingNames`, ya falla la primera comprobación.

5. **Escribir la respuesta a mano en vez de calcularla.** El `23` Parking Lot se corrige con dos matrices distintas, una de 4x4 y otra de 4x6, así que un `getParkingLotState()` que devuelva números fijos pasa la primera comprobación y suspende la segunda. Al `22` Matrix Builder solo se le llama con `matrixBuilder(5)`, pero el test exige que la matriz contenga a la vez `0` y `1`, así que rellenarla con un único valor también falla.

6. **Modificar el array que te dan.** El ejercicio `15` comprueba que `myArray[14]` siga valiendo `5435` después de ejecutar tu código, así que ordenar el array original en el sitio suspende aunque el máximo que imprimes sea correcto.

7. **Confundir los tipos.** El `02.1` pide el valor `null`, no la cadena `"null"`, y el `10` Everything is awesome quiere que metas el número `1`, no `"1"`.

## ❓ Preguntas frecuentes

### ¿Hace falta instalar algo para empezar?

No. Al abrir el repositorio en GitHub Codespaces se levanta un contenedor que instala solo Node.js 22, Jest 29.7.0 y la CLI de LearnPack, y los ejercicios se abren automáticamente dentro de VS Code. La instalación local es opcional y solo necesita Node.js y un comando de `npm`.

### ¿Cuánto se tarda en terminar los 44 ejercicios?

La estimación es de 12 horas. La primera mitad (del `01` al `08.3`) son ejercicios cortos de unos pocos minutos; los últimos, como Matrix Builder, Making a UL o Techno Beats, son pequeños algoritmos que pueden llevarte media hora o más.

### ¿Y si el test falla pero mi resultado parece correcto?

Fíjate en cuál de las comprobaciones ha fallado. Muchos tests comparan el búfer de la consola carácter a carácter, así que un espacio de más, un salto de línea que falta o un `console.log` extra bastan para suspender. Otros revisan el código fuente buscando un método concreto, o buscan una función por su nombre exacto.

### ¿Puedo usar un `for` en lugar de `map` o `filter`?

En los ejercicios que van justo de esos métodos, no. Los tests del `09`, el `10` y el `16` buscan `forEach` dentro de tu `app.js`, y los de `map` y `filter` comparan tu resultado con el del método correspondiente. En el resto puedes elegir el bucle que prefieras.

### ¿Hay soluciones que pueda consultar?

Sí. Cada una de las 43 carpetas con test incluye un `solution.hide.js` con una implementación que funciona, y 17 ejercicios enlazan además un vídeo desde el encabezado de sus instrucciones. Intenta terminarlo por tu cuenta primero: los tests te dan mucha más información que la solución.

### ¿Cuesta algo y de quién es el código que escribo?

Acceder a este repositorio y a sus ejercicios no cuesta nada, y el código que escribes en `app.js` es tuyo. El contenido del tutorial, en cambio, no es open source: se publica con todos los derechos de propiedad intelectual reservados, así que no está permitido republicarlo ni redistribuirlo. Puedes leer el texto completo en [LICENSE.md](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/blob/HEAD/LICENSE.md).

<!-- hide -->
## 📚 Tutoriales relacionados

Este paquete es el segundo paso de la serie interactiva de JavaScript:

1. [JavaScript para principiantes](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)
2. **Arrays y loops** ← estás aquí
3. [Funciones de JavaScript](https://4geeks.com/es/interactive-exercise/javascript-functions-exercises-tutorial-es)
4. [Domina JavaScript practicando](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es)

## 🚀 Cómo empezar

La vía rápida es [abrirlo en GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-arrays-exercises-tutorial). El contenedor instala todo y los ejercicios arrancan solos dentro de VS Code.

Si no arrancan automáticamente, escribe esto en la terminal:

```bash
learnpack start
```

También puedes abrir el paquete en [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial).

Para moverte entre ejercicios usa el menú superior, que además lleva la cuenta de cuántos de los 44 llevas resueltos:

![Menú de ejercicios de LearnPack abierto, con la lista del 00 Welcome al 03 Print_the_last_one, el contador 0/44 Solved exercises y el selector de idioma con banderas](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/exercises-menu.png)

## 💻 Instalación local

Clona el repositorio y sigue estos pasos:

1. Instala LearnPack y su plugin compilador de Node.js. Necesitas tener Node.js instalado antes:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/node
   ```

2. Arranca el tutorial desde la misma carpeta donde está el `learn.json`:

   ```bash
   learnpack start
   ```

Si algo se tuerce, la [guía de inicio de LearnPack para estudiantes](https://4geeks.com/docs/learnpack/quickstart-for-learners) cubre todo el proceso.

## 📝 Cómo están organizados los ejercicios

Cada carpeta de reto dentro de `exercises/` es un pequeño programa de Node.js con estos ficheros:

- **`app.js`:** el fichero que editas. Es el punto de entrada que se ejecuta.
- **`README.md`:** las instrucciones en inglés.
- **`README.es.md`:** las mismas instrucciones en español.
- **`test.js` o `tests.js`:** el test de Jest que corrige tu solución. No hace falta que lo abras.
- **`solution.hide.js`:** una solución que funciona, oculta por LearnPack hasta que la pidas.

## 🤝 Colaboradores

Gracias a estas personas ([leyenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr): programación 💻, idea 🤔, tests ⚠️, revisión de pull requests 👀, construcción del tutorial ✅, documentación 📖

2. [Paolo (plucodev)](https://github.com/plucodev): reporte de bugs 🐛, programación 💻, traducción 🌎

Puedes ver la lista completa en el [gráfico de colaboradores](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/graphs/contributors). El proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y toda contribución es bienvenida. Si encuentras un error o una errata, repórtalo o manda un pull request.
<!-- endhide -->

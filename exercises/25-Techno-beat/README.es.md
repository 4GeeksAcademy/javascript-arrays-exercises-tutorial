# `25` Techno Beats

Estás trabajando con un DJ, y necesita un programa que pueda crear ritmos para sus canciones.

## 📝 Instrucciones:

1. Crear una función `lyricsGenerator` que recibe un arreglo. El arreglo enviado a la función será algo así:

```js
[0,0,1,1,0,0,0] 
```

2. Por cada `0`, agrégale al string `'Boom'`.

3. Por cada `1`, agrégale al string `'Drop the bass'`.

4. Si encuentras el número `1` tres veces seguidas, TAMBIÉN debes AGREGAR al string `¡¡¡Break the bass!!!`.

## 💻 Resultado esperado:

```text
Boom Boom Drop the bass Drop the bass Boom Boom Boom
Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!! Boom Boom Boom
Boom Boom Boom
Drop the bass Boom Drop the bass
Drop the bass Drop the bass Drop the bass !!!Break the bass!!!
```

## 💡 Pistas:

+ Recuerda usar variables auxiliares.

+ Recuerda que tu función `lyricsGenerator` debe retornar un `string`.

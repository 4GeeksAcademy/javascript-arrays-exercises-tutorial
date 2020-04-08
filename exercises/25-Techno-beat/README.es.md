Techno Beats
Estás trabajando con un DJ y él necesita un programa que pueda crear ritmos para sus canciones.

Instrucciones:
Crear una función lyricsGenerator que recibe un arreglo
El arreglo enviado a la función será algo como esto:
```js
[0,0,1,1,0,0,0] 
```
Para cada cero, agregará a la cadena 'Boom'
Para cada uno, agregará a la cadena 'Drop the base'

Restricciones
Si encuentra el número Uno (1) tres veces seguidas, TAMBIÉN debe AGREGARSE a la cadena "¡¡¡Break the base!!!"

Salida de la función esperada:
Un string que debe estar compuesta de Boom o Drop the base o !!!Break the base!!!
Salida esperada:
```md
Boom Boom Drop the base Drop the base Boom Boom Boom
Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom
Boom Boom Boom
Drop the base Boom Drop the base
Drop the base Drop the base Drop the base !!!Break the base!!!
```

Pista
Recuerde usar variables auxiliares
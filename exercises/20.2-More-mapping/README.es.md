El método array.map llama a una función para cada valor en un arreglo y luego genera un nuevo arreglo con los valores modificados.
```js
incrementByOne = function (number) {
  return number + 1; 
}

var myArray = [1, 2, 3, 4];

myArray.map(incrementByOne); //returns [2, 3, 4, 5]
```

Mas información sobre mapeo:    
Mapping Arrays (3:44) 
Understanding The Javascript Map 

Instrucciones:

Crea una función llamada myFunction que multiplique cada número por 3.
Usa la función Array.map para ejecutar la función myFunction a través de cada valor enl arreglo.
    Almacena el nuevo arreglo en una variable llamada newArray y luego imprimes el nuevo arreglo con console.log ().

Pista:
La función tomará un parámetro con el elemento original que se transforma y agrega en el nuevo arreglo.
Recuerda que tu función debe devolver cada uno de los nuevos elementos que se almacenarán en el nuevo arreglo.


# `27` Promises and arrays

Tienes una lista de IDs de estudiantes. Necesitas crear una función para obtener información de acuerdo a cada ID (en una operacion asíncrona), asi que necesitas crear un array de Promesas para manejar todas las peticiones y ejecutar algo en base al resultado

## 📝 Instructions:

1. Crea una función flecha `mockEndpointCall` para 'mockear' la petición. Esta debe ser una función asíncrona que reciba dos parámetros: la lista de usuarios y un array de IDs bloqueados. La función debe retornar una nueva Promesa que "rechace" la operacion si es que el ID pasado se encuentra dentro de los IDs bloqueados. Si se rechaza, se debe usar el mensaje 'User is blocked', de lo contrario debe resolverse la operación con el mensaje 'User is available'

```
await mockEndpointCall(3, [1, 2]) // resolves with message "User is available"
await mockEndpointCall(1, [1, 2]) // rejects with message "User is blocked"
```

2. Crea una función flecha llamada `checkAllUsers`. Esta función recibe un arreglo de identificadores de usuario (user ids) y un arreglo de identificadores bloqueados (blocked ids).
La función debe devolver un arreglo de Promesas (por cada elemento, se usa el user id para llamar a `mockEndpointCall` y devolver el resultado).

3. Tienes tres variables llamadas “check” (checkA, checkB y checkC).
Para cada una, agrega código que cumpla con lo siguiente:

- En caso de que todos los elementos se resuelvan correctamente, imprime en la consola el mensaje:
Success: {nombre del check}'.
Ejemplo para checkA: "Success: checkA".

- En caso de que uno o más elementos fallen (sean rechazados), imprime en la consola el mensaje:
'Error: {nombre del check}'.
Ejemplo para checkA: "Error: checkA".

## 💻 Resultado Esperado:

```text
Success: checkA
Success: checkB
Error: checkC
```

## 💡 Pistas:

+ Puedes usar Promise.all para manejar el resultado de un array de Promesas

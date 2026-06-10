# `26` Map, filter and reduce

Tienes una lista de estudiantes. Cada estudiante tiene un nombre y un mentor asignado. Además, tienes otros dos arrays con los nombres de los mentores y sus IDS (array ordenado). Necesitas crear nuevos arrays con cierta información extraida de estos items.

## 📝 Instructions:

1. Crea una funcón flecha `getStudentIds` que reciba un array de estudiantes y devuelva un array de IDs

2. Crea una función flecha `filterStudents` que reciba un array de estudiantes y el nombre de un profesor, y retorne un array de estudiantes filtrados por mentor

3. Crea una función flecha `countStudents` que reciba un array de estudiantes, y lo reduzca a un objeto. Las llaves del objeto serán los ids de los mentores, y cada propiedad del objeto debe incluir el numero de estudiantes asignados al mentor (como `count`), y un texto que incluya este numero - 'Total students: x' (as `textCount`)

Example:
```
{
  '456': { count: 3, textCount: 'Total students: 3' },
  '457': { count: 1, textCount: 'Total students: 1' }
}
```

## 💻 Resultado esperado:

```text
['123', '124', '125', '126']
[{
    id: '124',
    name: 'Juan',
    mentor: '457'
}]
{
    '456': 'Total students: 3',
    '457': 'Total students: 1',
}

```

## 💡 Pistas:

+ Recuerda usar spread operators y deconstruction

+ Puedes usar template literals para construir strings con variables
s
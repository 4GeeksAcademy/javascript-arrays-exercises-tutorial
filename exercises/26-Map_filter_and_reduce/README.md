# `26` Map, filter and reduce

You are working with a list of students. Each student has a name and a mentor assigned. You also have two other arrays with the mentors names and Ids (sorted). You need to create some new arrays with information obtained from these items.

## 📝 Instructions:

1. Create an arrow function `getStudentIds` to receive an array of students and return an array of students IDs.

2. Create an arrow function `filterStudents` to receive an array of students and a teachers name, and then return an array of students filtered by mentor

3. Create an arrow function `countStudents` to receive an array of students, and reduce it to a single object. The object keys are the teachers ids, and each item should include the number of students assigned to the mentor (as `count`), and a parsed text including this count (as `textCount`)

Example:
```
{
  '456': { count: 3, textCount: 'Total students: 3' },
  '457': { count: 1, textCount: 'Total students: 1' }
}
```

## 💻 Expected Output:

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

## 💡 Hints:

+ Remember to use use spread operators and deconstruction

+ You can use template literals to construct strings with dynamic values
s
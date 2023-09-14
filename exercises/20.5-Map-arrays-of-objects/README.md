# `20.5` Map array of objects

The most common scenario for the mapping function is simplifying given arrays, for example:

The current algorithm creates an array with only the names of the people and prints it on the console.

## 📝 Instructions:

1. Please update the `simplifier` function so it creates an array where each item contains the following:

```text
Hello, my name is Joe and I am 36 years old
```

## 💻 Expected result:

The result should be similar to this, but the ages might be different.

```js
[ 'Hello, my name is Joe and I am 36 years old',
  'Hello, my name is Bob and I am 47 years old',
  'Hello, my name is Erika and I am 33 years old',
  'Hello, my name is Dylan and I am 23 years old',
  'Hello, my name is Steve and I am 19 years old' ]
```

## 💡 Hints:

+ You have to get the age of each person based on their `birthDate`. 

+ Search in Google "How to get the age of a given birth date in JavaScript".

+ Remember that the age also depends on the day, if the day of the current date is greater than or equal to the current day, it adds up one more year.

+ Inside your `simplifier` function you have to return a concatenation.

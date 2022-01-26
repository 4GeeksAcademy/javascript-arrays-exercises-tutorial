# `14` Divide and conquer

## 📝 Instructions:

1. Create a function called `mergeTwoList` that expects an array of numbers (integers).

2. Loop through the array and separate the odd and the even numbers in different arrays.

3. If the number is odd number push it to a placeholder array named `odd`.

4. If the number is even number push it to a placeholder array named `even`.

5. Then add the `even` array to the `odd` array, and have the function return them as one single array.

> Remember, the `odd` array comes first and you have to append the `even` array to it. Use the `.push()` method.  


Example:

```js
mergeTwoList([1,2,33,10,20,4])

// expected console output
[1, 33, 2, 10, 20, 4]
```

### 💡 Hint:

+ Create local empty ***placeholder*** or ***auxiliary*** variables when you need to store data in a function.

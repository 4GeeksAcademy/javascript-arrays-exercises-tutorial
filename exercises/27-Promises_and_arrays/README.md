# `27` Promises and arrays

You have a list of students ID. You need to create a function to fetch some data based on each ID (async operation), so you want to create a list of Promises to handle all requests, and do something based on the result of all operations (resolved or rejected)
## 📝 Instructions:

1. Create an arrow function `mockEndpointCall` to "mock" the request call. This should be an async function with two parameters: the list of users, and an array of blocked ids. The function should return a new Promise that rejects if the userId is in the list of blocked Ids (with the message 'User is blocked'), else it should resolve with the message 'User is available'

```
await mockEndpointCall(3, [1, 2]) // resolves with message "User is available"
await mockEndpointCall(1, [1, 2]) // rejects with message "User is blocked"
```

2. Create an arrow function `checkAllUsers`. This function receives an array of user ids, and an array of blocked ids. The function should return an array of Promises (for each item, we use the user id to call `mockEndpointCall` and returns the result).

3. You have three "check" variables (checkA, checkB and checkC). For each one, add code to support the following:
- In case all items are resolved, print this message to the console: 'Success: {Check name}'. Example for checkA: "Sucess: checkA"
- In case one (or more) item fails (is rejected), print this message to the console: 'Error: {Check name}'. Example for checkA: "Error: checkA"

## 💻 Expected Output:

```text
Success: checkA
Success: checkB
Error: checkC
```

## 💡 Hints:

+ You can use Promise.all to catch the resolution or rejection of an array of promises

# `21` Filter an Array

Another amazing function for arrays is `filter`. 
It loops the entire original array and only returns the values that match a particular condition.

[Here is the documentation of the filter function in w3school](https://www.w3schools.com/jsref/jsref_filter.asp)

For example, this algorithm filters the `allNumbers` array and returns a new array with only the odds numbers:

```js
var allNumbers = [23,12,35,5,3,2,3,54,3,21,534,23,42,1];

var onlyOdds = allNumbers.filter(function(number){
	return (number % 2 > 0)
});

console.log(onlyOdds);
```

# 📝Instructions
- Complete the code to make it fill the `resultingNames` array with only the names that start with letter R
- Use the `array.filter` function

## 💡Hint
Here is a 2:29min video explaining array.filter
https://www.youtube.com/watch?v=0qsFDFC2oEE
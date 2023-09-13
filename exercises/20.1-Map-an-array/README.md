# `20.1` Map an array

The `array.map()` function is one of the most used functions in JavaScript. It is amazing because it lets you create a new array using each item of the original array as a seed.

In this example, we are using the `array.map()` function to create a new array of civilian hours starting from a given array of military hours.

```js
// Given an array of military hours
let militaryHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

// You first define a function that receives militaryHours and returns their equivalent in civilian time
let militaryToCivilian = function(hour) {
	if(hour == 12) return hour + "pm";
	else if(hour == 24) return hour-12 + "am";
	else if(hour > 11) return hour-12 + "pm";
	else return hour + "am";
}

// You can create a new array of civilian hours by mapping the original array but passing the militaryToCivilian function to the map function
let civilianHours = militaryHours.map(militaryToCivilian);

console.log(civilianHours);
```

Copy paste the code inside the code editor to test it if you want.

## 📝 Instructions:

1. Using a similar logic to the one given in the example, add the needed code to convert an array of `Celsius` values into `Fahrenheit` inside the `array.map()` function.

## 💡 Hints:

+ Here is a 3:40 min video explaining the array map function:

https://www.youtube.com/watch?v=hfYa4ugeyuc

+ You only have to convert the numbers. There is no need to include the measurement unit (F° or C°).

## 💻 Expected result:

```js
[ 28.4, 93.2, 132.8, 14 ]
```

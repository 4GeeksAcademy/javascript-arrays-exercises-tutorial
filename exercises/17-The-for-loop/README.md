# `17` The For Loop Find average

Another way to loop an array with the `for` loop is to use the `of` statement like this:

```js
for (let element of myArray) {
    console.log(element);
}
```

The `for...of` loop gives you direct access to the elements (as seen above), without you having to use the format `array[index]` to access the value of an element. 

That makes this type of loop simpler to use; however it does not give you access to indexes, so if you need to use the indexes of the elements, you wont be able to. 

You can learn more about these loops here:
https://www.w3schools.com/js/js_loop_forof.asp

## 📝 Instructions:

1. Calculate the average value of all the items in the array.

2. Print it on the console.

## 💡 Hint:

+ To get the average, you have to add all the values and divide the result by the total length of the list.

## 💻 Expected result:

```js
27278.8125
```



# `25` Techno Beats

You are working with a DJ and he needs a program that can create a beats for his song.

## 📝 Instructions:

1. Create a function `lyricsGenerator` that receives an array. The array passed to the function will be something like this:
```js
[0,0,1,1,0,0,0] 
```
2. For each Zero you will add to the string 'Boom'

3. For each One you will add to the string 'Drop the base'

### Constraints:

+ If you find the number One (1) three times in a row, you should ALSO ADD to the string `!!!Break the base!!!`

### Expected Function Output:

A string which should be comprise of Boom or Drop the base or `!!!Break the base!!!`

### Expected Output:

```js
Boom Boom Drop the base Drop the base Boom Boom Boom
Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom
Boom Boom Boom
Drop the base Boom Drop the base
Drop the base Drop the base Drop the base !!!Break the base!!!
```

## 💡 Hint:

+ Remember to use helper variables

+ Remember your function `lyricsGenerator` should be returning a `string`

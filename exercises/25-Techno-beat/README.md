# `25` Techno Beats

You are working with a DJ and he needs a program that can create a beats for his song.

## 📝 Instructions:

1. Create a function `lyricsGenerator` that receives an array. The array passed to the function will be something like this:
```js
[0,0,1,1,0,0,0] 
```
2. For each Zero you will add to the string 'Boom'

3. For each One you will add to the string 'Drop the bass'

### Constraints:

+ If you find the number One (1) three times in a row, you should ALSO ADD to the string `!!!Break the bass!!!`

### Expected Function Output:

A string which should be comprise of Boom or Drop the bass or `!!!Break the bass!!!`

### Expected Output:

```js
Boom Boom Drop the bass Drop the bass Boom Boom Boom
Boom Boom Drop the bass Drop the bass Drop the bass !!!Break the bass!!! Boom Boom Boom
Boom Boom Boom
Drop the bass Boom Drop the bass
Drop the bass Drop the bass Drop the bass !!!Break the bass!!!
```

## 💡 Hint:

+ Remember to use helper variables

+ Remember your function `lyricsGenerator` should be returning a `string`

<!-- hide -->
<div align="center">

# Learn Javascript Arrays and Loops Interactive

<img width="560" alt="Tutorial cover: the words Learn Javascript, Loops and Arrays, interactive, next to the yellow JavaScript hexagon logo" src="https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/preview.png">

[![Certified tutorial](https://img.shields.io/badge/4Geeks_Academy-Certified_tutorial-2563eb)](https://4geeks.com/en/interactive-exercise/javascript-array-loops-exercises)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-43_autograded_exercises-2563eb)](https://github.com/learnpack/learnpack)
[![Open in GitHub Codespaces](https://img.shields.io/badge/Open_in-GitHub_Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-arrays-exercises-tutorial)

Read these instructions in [🇪🇸 Spanish](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/blob/HEAD/README.es.md)

</div>
<!-- endhide -->

This tutorial contains 44 JavaScript exercises about arrays and loops: one welcome screen plus 43 challenges that are graded automatically by Jest on Node.js. You practice `for`, `for...of`, `for...in`, `do...while`, `forEach`, `map` and `filter` against real data such as matrices, object literals and arrays of objects. It takes about 12 hours, starts from `console.log()`, and 17 exercises ship with a recorded video solution.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty:** easy, designed for people who have never written a loop.
- **Estimated duration:** 12 hours.
- **Technologies:** JavaScript, arrays, Node.js.
- **Exercises:** 44 folders, 43 of them with an automated test file.
- **Grading:** automatic, Jest 29.7.0 plus `rewire` to inspect your variables.
- **Video solutions:** 17 exercises include a linked walkthrough video.
- **Languages:** every exercise ships with instructions in English and Spanish.
<!-- endhide -->

## 🎯 What will you learn?

The tutorial walks the whole looping toolbox in JavaScript, one small idea per exercise:

- **Array anatomy:** items, `length` and zero-based indexes, plus reading and replacing a value by position.
- **The classic `for` loop:** counting up, counting down, jumping two positions at a time, and starting from the middle of an array.
- **Conditionals inside loops:** printing only what matches, counting occurrences, and accumulating into helper variables.
- **`do...while`:** the loop that always runs at least once, used for a countdown that ends in `LIFTOFF`.
- **`for...of` and `for...in`:** direct access to values, and iterating the properties of an object literal.
- **`forEach`:** side-effect iteration where the return value is ignored.
- **`map`:** six dedicated exercises (20.1 to 20.6) that transform one array into another of the same length.
- **`filter`:** keeping only the elements that satisfy a condition, including arrays of objects.
- **Two-dimensional arrays:** nested loops over matrices, coordinates and a parking-lot grid.

![Diagram of an array with length 8: eight numbered boxes where the labels point to the positions (indexes 0 to 7) and to the items stored in each position](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/DbmSOHT.png)

## 👀 What will you build?

Every exercise is a tiny program you complete inside `app.js`. These are some of the real ones:

- **`07.1` Finding Waldo:** loop an array of 250 names and print the position where `"Waldo"` is hiding, comparing with `toLowerCase()` so casing does not matter.
- **`07.2` Letter Counter:** loop a whole paragraph and fill a `counts` object where every letter is a key and its value is how many times it appears, like `{ h: 1, e: 1, l: 3, o: 2 }`, ignoring spaces and casing.
- **`11` DO DO DO:** count down from 20 to 1 with `do...while`, add a `!` to every multiple of 5, and print `LIFTOFF` instead of `0`.
- **`14` Divide and Conquer:** write `mergeTwoList()` so `[1,2,33,10,20,4]` becomes `[1, 33, 2, 10, 20, 4]`, odd numbers first.
- **`19` And one and two and three:** loop the properties of a `contact` object and print `fullName : John Doe` style lines.
- **`22` Matrix Builder:** write `matrixBuilder(5)` that returns a 5x5 matrix filled with random `0` and `1` values.
- **`23` Parking Lot:** write `getParkingLotState()` that receives any matrix and returns `{ totalSlots, availableSlots, occupiedSlots }`.
- **`24` Making a UL:** chain `filter`, `map` and `forEach` over an array of colour objects to build a single `<ul>...</ul>` string.
- **`25` Techno Beats:** write `lyricsGenerator()` that turns `[0,0,1,1,0,0,0]` into `"Boom Boom Drop the bass Drop the bass Boom Boom Boom"`, adding `!!!Break the bass!!!` when three `1` appear in a row.

![Parking lot diagram: a drawing of a parking lot next to the same lot represented as a grid of numbers, where 1 means occupied, 2 means available and 0 means it is not a parking spot](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/23.png)

## 🎓 What do you need before starting?

- **Basic JavaScript syntax:** variables, `if` conditionals and how to declare a function. Exercise `01` starts at `console.log()`, so nothing beyond that is assumed.
- **No local setup if you use Codespaces:** the dev container already installs Node.js 22, Jest and the LearnPack CLI for you.
- **Node.js only if you run it locally:** the exercises run on Node, there is no browser or DOM involved.
- **No prior experience with loops:** the array anatomy, indexes and the first `for` loop are all taught inside the tutorial.
- **No English required:** all 44 exercises ship with instructions in English and Spanish, and the flag selector in the menu switches between them without losing your progress.

## ✅ How does the automatic grading work?

43 of the 44 exercises have a test file (23 named `test.js` and 20 named `tests.js`); only `00-Welcome`, the intro screen, has none. When you click `Run` the LearnPack CLI executes that file with Jest and shows you which assertion failed.

The tests check three different things, and knowing which one is failing saves a lot of time:

1. **The output printed to the console.** `console.log` is mocked and every call is stored in a buffer, then compared against the expected result.

2. **The source code of your `app.js`.** Some exercises read the file as text and match it against a regular expression, so exercise `09` literally requires `.forEach(` and exercise `07.1` requires both `for (` and `.toLowerCase(`.

3. **Your variables and functions by name.** The tests load `app.js` with `rewire` and pull values out of it, so `deletePerson`, `matrixBuilder`, `resultingNames` or `coordinatesArray` must keep the exact name given in the starter file.

> 💡 The grading is strict on purpose, but it is a guide, not a judge. If you are stuck, open the exercise menu, jump ahead and come back later.

## 💡 What mistakes should you avoid?

1. **Printing when the exercise expects a `return`.** In `25` Techno Beats the test calls `lyricsGenerator([1,1,1])` and asserts that the returned value is the string `"Drop the bass Drop the bass Drop the bass !!!Break the bass!!!"`. If you end the function with `console.log(beats)` instead of `return beats`, the function returns `undefined` and the assertion fails. It is the same story in `12`, `22` and `23`: the `console.log` calls are already written at the bottom of `app.js` and your only job is to return the value.

2. **Leaving debugging `console.log` calls behind.** Some tests count the calls exactly: `12` Delete element expects exactly 3 and `25` Techno Beats expects exactly 5. One extra print turns a correct solution red.

3. **Solving it with a different method than the one being taught.** Because the tests grep your source code, replacing the `forEach` of exercise `09` with a `for` loop fails even though the console output is identical, and `14` Divide and Conquer only passes if the word `concat` appears in your file.

4. **Renaming or removing the variables that come with the exercise.** `rewire` looks them up by name, so if `21` Filter an Array no longer declares `resultingNames`, the very first assertion breaks.

5. **Hardcoding the answer instead of computing it.** `23` Parking Lot is graded with two different matrices, a 4x4 one and a 4x6 one, so a `getParkingLotState()` that returns fixed numbers passes the first assertion and fails the second. `22` Matrix Builder is only called as `matrixBuilder(5)`, but the test still demands that the matrix contain both `0` and `1`, so filling it with a single value fails too.

6. **Mutating the array you were given.** Exercise `15` asserts that `myArray[14]` is still `5435` after your code runs, so sorting the original array in place fails the test even if the maximum you print is right.

7. **Confusing types.** `02.1` asks for the value `null`, not the string `"null"`, and `10` Everything is awesome wants the number `1` pushed, not `"1"`.

## ❓ Frequently asked questions

### Do I need to install anything to start?

No. Opening the repository in GitHub Codespaces gives you a container that installs Node.js 22, Jest 29.7.0 and the LearnPack CLI automatically, and the exercises open by themselves inside VS Code. Installing locally is optional and only needs Node.js plus one `npm` command.

### How long does it take to finish the 44 exercises?

The tutorial is estimated at 12 hours. The first half (exercises `01` to `08.3`) is mostly short drills of a few minutes each; the last ones, such as Matrix Builder, Making a UL and Techno Beats, are small algorithms that can take 30 minutes or more.

### What if the test fails but my output looks correct?

Read which of the assertions failed. Many tests compare the console buffer character by character, so an extra space, a missing line break or an extra `console.log` is enough to fail. Others check the source code for a specific method, or look for a function by its exact name.

### Can I use a `for` loop instead of `map` or `filter`?

Not in the exercises that are specifically about those methods. The tests of `09`, `10` and `16` search your `app.js` for `forEach`, and the `map` and `filter` exercises compare your result against the output of the corresponding method. Everywhere else you are free to pick the loop you prefer.

### Is there a solution I can look at?

Yes. Each of the 43 graded folders contains a `solution.hide.js` file with a working implementation, and 17 exercises also link a video walkthrough from the top of their instructions. Try to finish the exercise first; the tests give you far more feedback than the solution does.

### Does it cost anything, and who owns the code I write?

Access to this repository and its exercises costs nothing, and the code you write in `app.js` is yours. The tutorial content itself is not open source: it is published under reserved intellectual property terms, so republishing or redistributing it is not allowed. Read the full text in [LICENSE.md](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/blob/HEAD/LICENSE.md).

<!-- hide -->
## 📚 Related tutorials

This package is the second step of the interactive JavaScript series:

1. [JavaScript for Beginners](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises)
2. **Arrays and Loops** ← you are here
3. [JavaScript Functions](https://4geeks.com/en/interactive-exercise/javascript-functions-exercises-tutorial)
4. [Master JavaScript Practicing](https://4geeks.com/en/interactive-exercise/master-javascript-exercises)

## 🚀 How to start

The fastest way is [Open in GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-arrays-exercises-tutorial). The container installs everything and the exercises start on their own inside VS Code.

If they do not start automatically, run this in the terminal:

```bash
learnpack start
```

You can also open the package in [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial).

To move between exercises, use the top menu. It also shows how many of the 44 exercises you have solved so far:

![LearnPack exercise menu open, listing the exercises from 00 Welcome to 03 Print_the_last_one with a 0/44 solved exercises counter and a language flag selector](https://raw.githubusercontent.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/master/.learn/assets/exercises-menu.png)

## 💻 Local installation

Clone the repository and follow these steps:

1. Install LearnPack and its Node.js compiler plugin. You need Node.js installed first:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/node
   ```

2. Start the tutorial from the same folder where `learn.json` lives:

   ```bash
   learnpack start
   ```

If you run into trouble, the [LearnPack quickstart for learners](https://4geeks.com/docs/learnpack/quickstart-for-learners) covers the whole setup.

## 📝 How the exercises are organized

Each challenge folder inside `exercises/` is one small Node.js program with these files:

- **`app.js`:** the file you edit. It is the entry point that gets executed.
- **`README.md`:** the instructions in English.
- **`README.es.md`:** the same instructions in Spanish.
- **`test.js` or `tests.js`:** the Jest test that grades your solution. You do not need to open it.
- **`solution.hide.js`:** a working solution, hidden by LearnPack until you ask for it.

## 🤝 Contributors

Thanks to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr): coder 💻, idea 🤔, build-tests ⚠️, pull-request-review 👀, build-tutorial ✅, documentation 📖

2. [Paolo (plucodev)](https://github.com/plucodev): bug reports 🐛, coder 💻, translation 🌎

See the full list on the [contributors graph](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification, and contributions of any kind are welcome. If you find a bug or a typo, please report it or send a pull request.
<!-- endhide -->

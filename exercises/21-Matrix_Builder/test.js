const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named matrixBuilder.", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('matrixBuilder');
  expect(myFunc).toBeTruthy();
});

test('The matrix should have the ammount of rows and columns required as parameter.', function () {
    const file = rewire("./app.js");
    const myFunc = file.__get__('matrixBuilder');

    let _test = myFunc(5);
    expect(_test.length.toString()).toMatch("5");
    expect(_test[0].length.toString()).toMatch("5");
});

test('The matrix should only have 0 or 1 as values.', function(){
    const file = rewire("./app.js");
    const myFunc = file.__get__('matrixBuilder');
    let _test = myFunc(5);
    let findCero = false;
    let findOne = false;
    _test.forEach(row => {
        row.forEach(item => {
            if(item == 0) findCero = true;
            else if(item == 1) findOne = true;
            else throw new Exception("The matrix contains other items rather than 0 and 1")
        })
    })
    expect(findCero).toBe(true);
    expect(findOne).toBe(true);
});

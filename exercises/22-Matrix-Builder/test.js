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

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The matrix should have the ammount of rows and columns required as parameter.', function () {
    const file = rewire("./app.js");
    const myFunc = file.__get__('matrixBuilder');

    let _test = myFunc(5);
    expect(_test.length.toString()).toMatch("5");
    expect(_test[0].length.toString()).toMatch("5");
});

test('The matrix should only have 0 or 1 as values.', function(){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let condition = false;
            if(_test[i][j] == 0 || _test[i][j]== 1){
                condition = true;
            }
            expect(condition).toBeTruthy();
        }
    }
});
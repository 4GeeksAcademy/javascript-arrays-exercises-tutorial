const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named matrixBuilder", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('matrixBuilder');
  expect(myFunc).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    function matrixBuilder(matrix){
      let newMatrix = [];
      let newArray = [];
      for (let x =0; x < matrix; x++){
        newMatrix.push(newArray)
      }
      for (let i =0; i < matrix; i++){
        newArray.push(1) 
      }
      return newMatrix
    }
    
    let _test = matrixBuilder(5)
    expect(_buffer).toMatch(_test.map(n => n).join(","));
  });





const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


test('You have to use the console.log function to print the correct output', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test("You shouldn't delete the variable newArray", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('newArray');
  expect(myVar).toBeTruthy();
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
   
    let _arrayOfStrings = ['1','5','45','34','343','34',6556,323];

    let _newArray = _arrayOfStrings.map(function(val){
      return typeof(val);
    });

    let _test = _newArray
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toEqual(_test);

  });

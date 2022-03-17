const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named myFunction", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('myFunction');
  expect(myFunc).toBeTruthy();
});
test("You should create a variable named newArray", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('newArray');
  expect(myVar).toBeTruthy();
});

test('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
   
    var _myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
    function _myFunction(param){
      return param * 3
    }
    let _newArray = _myNumbers.map(_myFunction)
    
    let _test = _newArray
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toEqual(_test);

  });

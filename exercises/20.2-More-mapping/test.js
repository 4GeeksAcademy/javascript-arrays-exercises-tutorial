const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named myFunction", function(){
  const file = rewire("./app.js");
  const myFunction = file.__get__('myFunction');
  expect(myFunction).toBeTruthy();
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
    const _myFunction = _app.__get__('myFunction');
    let _numberTest = [23,234,345,4356234,243,43,56,2];
    let _newArray = _numberTest.map(_myFunction);
    expect(_buffer).toMatch([ 69, 702, 1035, 13068702, 729, 129, 168, 6 ].map(n => n).join(","));
  });

  test('The solution should work with other arrays', function () {
    const _app = rewire('./app.js');
    const _myFunction = _app.__get__('myFunction');
    let _numberTest = [44,125,90,98365637,77,1,43,0];
    let _newArray = _numberTest.map(_myFunction);
    expect(_newArray).toEqual([ 132, 375, 270, 295096911, 231, 3, 129, 0 ])
  });

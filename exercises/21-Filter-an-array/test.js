const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create the variable resultingNames.", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('resultingNames');
  expect(myVar).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('You should use the console.log to call the variable resultingNames', function () {
  const file = rewire("./app.js");
  const myVar = file.__get__('resultingNames');
  expect(console.log).toHaveBeenCalledWith(myVar);
 });

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    let _allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];
    let _test = _allNames.filter(item=>item[0] === "R")
    expect(_buffer).toMatch(_test.map(n => n).join(","));
  });





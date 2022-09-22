const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

let reverse = Array.prototype.reverse;
Array.prototype.reverse = jest.fn(function(){ return this; });

it("Create a loop", function () {
  const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  expect(app_content).toMatch(/for\s*/);
});

it("Don't use the reverse function", function () {
  const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  expect(app_content).not.toMatch(/\.reverse(\s*)\(/);
});

it('Use the console.log function once to print the newArray on the console', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('There needs to be a variable called mix with the original array', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('mix');
    expect(variable).toBeTruthy();
});

it('Loop the array and console.log all of its item types', function () {
    const _app = rewire('./app.js');
    
    let _mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
    function myFunc(){
      let newArray = []
      for (let i=0; i < _mix.length; i++){
        newArray.push(typeof _mix[i])

      }
      return newArray
    }
    let _test = myFunc()
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toMatch(inverted.map(n => n).join(","));
});
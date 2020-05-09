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

test("You shouldn't delete the variable prepender", function(){
  const file = rewire("./app.js");
  const myVar = file.__get__('prepender');
  expect(myVar).toBeTruthy();
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
   
   let _names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

    let _prepender = function(name){
      return 'My name is: '+name;
    };

    let _test = _names.map(_prepender)
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toEqual(_test);

  });

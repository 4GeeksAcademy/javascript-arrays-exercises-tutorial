const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
   
    
    let _arrayOfCelsiusValues = [-2,34,56,-10];

    let _arrayOfFahrenheitValues = _arrayOfCelsiusValues.map(function(_value){
	
	      //add your code here and return the new value
	      return (_value * 9/5) + 32
    });

    let _test = _arrayOfFahrenheitValues
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toEqual(_test);

  });

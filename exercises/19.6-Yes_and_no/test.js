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

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    let _output = []
    let _theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

    //your code here
    function _myFunc(param){
      if(param === 0){return "woko"}
      else if(param === 1){return "wiki"}
    }
        
    let _test = _theBools.map(_myFunc)
    expect(_buffer).toMatch(_test.map(n => n).join(","));
  });





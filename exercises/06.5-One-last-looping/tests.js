const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

let reverse = Array.prototype.reverse;
Array.prototype.reverse = jest.fn(function(){ return this; });

it('Call the console.log function as many times as items in the array', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    expect(console.log.mock.calls.length).toBe(variable.length);
});

it('Do not use the reverse function', function () {
    expect(Array.prototype.reverse.mock.calls.length).toBe(0);
});

it('Loop the array in a reverse order and console.log all of its item', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    let inverted = [];
    for(let i = variable.length-1; i>=0;i--){
        inverted.push(variable[i]);
    }
    expect(_buffer).toMatch(inverted.map(n => n+"\n").join(""));
});
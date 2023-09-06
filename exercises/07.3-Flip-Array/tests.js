const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

let reverse = Array.prototype.reverse;
Array.prototype.reverse = jest.fn(function(){ return this; });

it('Use the console.log function once', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('There needs to be a variable called "arr" with the original array', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('arr');
    expect(variable).toBeTruthy();
});

it('Loop the array in a reverse order and console.log all of its items', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('arr');
    let inverted = [];
    for(let i = variable.length-1; i>=0;i--){
        inverted.push(variable[i]);
    }
    expect(_buffer).toMatch(inverted.map(n => n).join(","));
});

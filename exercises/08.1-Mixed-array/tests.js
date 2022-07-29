const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

let reverse = Array.prototype.reverse;
Array.prototype.reverse = jest.fn(function(){ return this; });

it('Use the console.log function once to print the newArray on the console', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it("Don't use the revese function", function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).not.toMatch(/\.reverse\s*\(/);
});

it('There needs to be a variable called mix with the original array', function () {
    const _app = rewire('./app.js');
    const mix = _app.__get__('mix');
    expect(mix).toBeTruthy();
});


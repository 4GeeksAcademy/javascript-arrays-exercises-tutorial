const fs = require('fs');
const path = require('path');
const rewire = require("rewire");



let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('You have to use the console.log function inside the loop', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

it('Use a for loop', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/for(\s*)\(/);
});

it('Use the toLowerCase function', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/\.toLowerCase(\s*)\(/);
});

it('Loop and add a conditional to print the position (i) where Waldo was fund', function () {
    const _app = rewire('./app.js');
    const people = _app.__get__('people');
    const position = people.indexOf("Waldo");
    expect(_buffer.includes(position+"\n")).toBe(true);
});
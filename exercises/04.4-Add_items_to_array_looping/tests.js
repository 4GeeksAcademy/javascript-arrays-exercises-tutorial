const fs = require("fs");
const path = require("path");
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function just one time', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('Print the array with 15 digits on the console', function () {
    expect(_buffer).toMatch(/\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+/);
});

it('You have to use Math.random() function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /Math\s*\.\s*random/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

it('You have to use Math.floor() function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /Math\s*\.\s*floor/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

test('The array arr should have 15 items', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('arr');
    expect(variable).toBeTruthy();
    expect(variable.length).toBe(15);
});
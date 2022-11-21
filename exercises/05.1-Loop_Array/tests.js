const fs = require("fs");
const path = require("path");
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


test('You have to use a for loop', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /for\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

it('Call the console.log function inside the loop', function () {
    const app = require('./app.js');
    const variable = rewire('./app.js').__get__('myArray');

    expect(console.log.mock.calls.length).toBe(variable.length);
});

it('Print every item on the console', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('myArray');
    expect(_buffer).toMatch(variable.map(n => n+"\n").join(""));
});
const fs = require("fs");
const path = require("path");
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


test('The variables "initialValue" should exist', () => {
    const file = rewire("./app.js");
    const initialValue = file.__get__("initialValue");
    expect(initialValue).not.toBe(undefined);
})
test('The variables "stopValue" should exist', () => {
    const file = rewire("./app.js");
    const stopValue = file.__get__("stopValue");
    expect(stopValue).not.toBe(undefined);
})
test('The variables "increasingValue" should exist', () => {
    const file = rewire("./app.js");
    const increasingValue = file.__get__("increasingValue");
    expect(increasingValue).not.toBe(undefined);
})

it('Call the console.log function as many times as half of the amount of items in the array', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    expect(console.log.mock.calls.length).toBe(variable.length/2);
});

it('Print in the console as you loop the array', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('mySampleArray');
    expect(_buffer).toMatch(variable.filter((n,i) => i > (variable.length / 2)).map(n => n+"\n").join(""));
});

test('You have to use for loop', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /for\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
})
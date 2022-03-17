const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function inside the loop', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(14);
});

it('Print the array from top to bottom, starting at mySampleArray.length-1 and ending at >= 0', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('mySampleArray');
    expect(_buffer).toMatch(variable.reverse().map(n => n+"\n").join(""));
});
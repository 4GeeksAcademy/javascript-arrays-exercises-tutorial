const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function inside the loop', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('myArray');

    expect(console.log.mock.calls.length).toBe(variable.length);
});

it('Print every item on the console', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('myArray');
    expect(_buffer).toMatch(variable.map(n => n+"\n").join(""));
});
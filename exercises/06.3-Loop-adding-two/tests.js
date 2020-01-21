const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function inside the loop', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    expect(console.log.mock.calls.length).toBe(variable.length/2);
});

it('Loop the array but jumping two items at a time instead of just one at a time', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('mySampleArray');
    expect(_buffer).toMatch(variable.filter((n,i) => i % 2 == 0).map(n => n+"\n").join(""));
});
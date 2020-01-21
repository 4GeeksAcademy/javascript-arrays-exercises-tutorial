const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function just one time', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(6);
});

it('Print the numbers on the console on each loop cicly (inside the loop)', function () {
    expect(_buffer).toMatch("7\n8\n9\n10\n11\n12\n");
});
const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

it('Use the console.log function once to print the variable hello', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it("Use a for loop", function () {
    expect(app_content).toMatch(/for(\s*)\(/);
});

it("Use a condition 'if' statement only for items of type object", function () {
    expect(app_content).toMatch(/if(\s*)\(/);
});

it("Do not cheat using the function filter", function () {
    expect(app_content).not.toMatch(/\.filter(\s*)\(/);
});

// it('The new array "hello" should only contain the object in myArray', function () {
//     const _app = rewire('./app.js');
//     const variable = _app.__get__('myArray');
//     const hello = _app.__get__('hello');
//     expect(variable.filter(item => typeof(item) === "object")).toMatch(hello);
// });

it('The new array "hello" should only contain the "objects" in myArray', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('myArray');
    const hello = _app.__get__('hello');
    const elements = variable.filter(item => typeof(item) === 'object');

    expect(hello).toEqual(elements);
});
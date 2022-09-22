const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

it("Use a for loop", function () {
    expect(app_content).toMatch(/for(\s*)\(/);
});

it("Do not cheat using the function .forEach", function () {
    expect(app_content).not.toMatch(/\.forEach(\s*)\(/);
});

it('Testing for [2,13,34,5] should return 54', function () {
    const _app = rewire('./app.js');
    const sumTheElements = _app.__get__('sumTheElements');
    const _result = sumTheElements([2,13,34,5])

    expect(_result).toEqual(54);
});

it('Testing for [12,3,37,5] should return 57', function () {
    const _app = rewire('./app.js');
    const sumTheElements = _app.__get__('sumTheElements');
    const _result = sumTheElements([12,3,37,5])

    expect(_result).toEqual(57);
});

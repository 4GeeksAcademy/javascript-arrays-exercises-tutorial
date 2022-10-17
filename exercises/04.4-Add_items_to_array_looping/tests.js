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

it('Use a for loop', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/for(\s*)\(/);
});


it("you should use the 'Math.random()' function", function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/Math\s*.random/);
  });
it("you should use the 'Math.floor()' function", function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/Math\s*.floor/);
  });

it('Print the array with 15 digits on the console', function () {
    expect(_buffer).toMatch(/\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+,\d+/);
});

it('The array arr should have 15 items', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('arr');
    expect(variable).toBeTruthy();
    expect(variable.length).toBe(15);
});
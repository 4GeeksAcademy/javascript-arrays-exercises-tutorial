const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});
it('The output in the console should match the one in the instructions!', function () {
    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    expect(_buffer.includes("5435\n")).toBe(true);
});
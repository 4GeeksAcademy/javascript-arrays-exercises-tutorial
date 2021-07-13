const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

it("Use the console.log function to print the numbers", function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

it("Use the forEach function", function () {
    expect(app_content).toMatch(/\.forEach(\s*)\(/);
});

it('Print only the numbers divisible by 14', function () {
    const _app = rewire('./app.js');
    const myArray = _app.__get__('myArray');
    let _output = "";
    myArray.forEach(function(item, index, arr){
        if(item % 14 === 0) _output += item + "\n";
    });

    expect(_output).toEqual(_buffer);
});
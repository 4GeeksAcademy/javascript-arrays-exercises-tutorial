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

it("We tried with a different array and the returning arrays don't match", function () {
    const _app = rewire('./app.js');
    const zerosToYahoos = _app.__get__('ZerosToYahoos');

    const _arr = [1,1,0,0,1,0,0,0];
    let _output = [];
    _arr.forEach(function(item, index, arr){
        if(item === 0) _output.push("Yahoo");
        else if(item === 1) _output.push(item);
    });

    const arr2 = zerosToYahoos(_arr);

    expect(arr2.sort()).toEqual(_output.sort());
});

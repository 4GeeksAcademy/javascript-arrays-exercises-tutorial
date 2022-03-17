const fs = require('fs');
const path = require('path');
const rewire = require("rewire");



let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('You have to use the console.log function once, at the end of the exercise', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('Use a for loop', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/for(\s*)\(/);
});

it('Use the toLowerCase function to ignore capital letters', function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(app_content).toMatch(/\.toLowerCase(\s*)\(/);
});

it('Create the object with the letter counts like { a: 1, b: 4, ... }', function () {
    const _app = rewire('./app.js');
    const par = _app.__get__('par');
    const counts = _app.__get__('counts');
    
    let _counts = {};
    for(let i in par){
        const letter = par[i].toLowerCase();
        if(letter == ' ' || letter == '') continue;
        if(typeof(_counts[letter]) === 'undefined') _counts[letter] = 1;
        else _counts[letter]++;
    }

    expect(counts).toEqual(_counts);
});
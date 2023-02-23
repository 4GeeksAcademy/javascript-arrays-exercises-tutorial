const rewire = require("rewire");
const fs = require("fs");
const path = require("path");
let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

let reverse = Array.prototype.reverse;
Array.prototype.reverse = jest.fn(function(){ return this; });

test("Remember that your for loop must start by declaring a variable let or var", function(){
    const content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(/for\s*\(\s*(let|var)\s*/.test(content)).toBe(true)
})

test('Call the console.log function as many times as items in the array', function () {
    const app = require('./app.js');
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    expect(console.log.mock.calls.length).toBe(variable.length);
});


test('Do not use the reverse function', function () {
    // expect(Array.prototype.reverse.mock.calls.length).toBe(0);
    const appContent = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    expect(appContent.includes('.reverse(')).toBe(false);
});

test('Loop the array in a reverse order and console.log all of its item', function () {
    const _app = rewire('./app.js');
    const variable = _app.__get__('mySampleArray');
    let inverted = [];
    for(let i = variable.length-1; i>=0;i--){
        inverted.push(variable[i]);
    }
    expect(_buffer).toMatch(inverted.map(n => n+"\n").join(""));
});
const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test('You have to use forEach function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /forEach\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
})


test('The array "myArray" should exist', () => {
    const file = rewire("./app.js");
    const myArray = file.__get__("myArray");
    expect(myArray).not.toBe(undefined);
})

it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});
it('The output in the console should match the one in the instructions!', function () {
    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    expect(_buffer.includes("23\n")).toBe(true);
});
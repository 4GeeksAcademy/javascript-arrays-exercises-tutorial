const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Print theLastOne on the console', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('The variable "theLastOne" should exist', () => {
    const file = rewire("./app.js");
    const theLastOne = file.__get__("theLastOne");
    expect(theLastOne).not.toBe(undefined);
})

it('theLastOne should have the value of the last element of myStupidArray', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('theLastOne');
    const myStupidArray = app.__get__('myStupidArray');
    expect(myStupidArray[myStupidArray.length-1]).toBe(variable);
});

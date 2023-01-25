const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test('The array "myArray" should exist', () => {
  const file = rewire("./app.js");
  const myArray = file.__get__("myArray");
  expect(myArray).not.toBe(undefined);
})

test('You have to use "for" loop function', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /for\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})


it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});
// it('The output in the console should match the one in the instructions!', function () {
//     //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
//     expect(_buffer.includes("27278.8125\n")).toBe(true);
// });
it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');

    let _myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
    let _avg = 0;
    for (let index in _myArray){
      _avg += _myArray[index]
	  }
    let _avgTest = _avg / _myArray.length
    expect(_avgTest).toEqual(parseFloat(_buffer));
  });

const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Function mergeTwoList should exist", function(){
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(mergeTwoList).toBeTruthy();
});

test("Function mergeTwoList must return an array", function(){
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(Array.isArray(mergeTwoList([3,4]))).toBe(true);
});

it('The returned array must contain inside all the odd items first', function () {
    const _app = rewire('./app.js');
    const mergeTwoList = _app.__get__('mergeTwoList');

    const _input = [ 23,34,65,23,45,87,45,89,34,2,5,8 ];
    const _odds = [23,65,23,45,87,45,89,5]
    const arrTest = mergeTwoList(_input);
    _odds.forEach((num,i) => expect(num).toEqual(arrTest[i]))
});
it('The returned array must contain inside all the even items at the end', function () {
    const _app = rewire('./app.js');
    const mergeTwoList = _app.__get__('mergeTwoList');

    const _input = [ 23,34,65,23,45,87,45,89,34,2,5,8 ];
    const _evens = [34,34,2,8]
    const arrTest = mergeTwoList(_input);
    _evens.forEach((num,i) => expect(num).toEqual(arrTest[i+8]))
});
it('The length of the returned array should be equal to the length of the original array', function () {
    const _app = rewire('./app.js');
    const mergeTwoList = _app.__get__('mergeTwoList');

    const _input = [ 23,34,65,87,45,89,34,2,5,8 ];
    const arrTest = mergeTwoList(_input);
    expect(arrTest.length).toEqual(_input.length);
});

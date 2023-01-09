const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Function mergeTwoList should exist", () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(mergeTwoList).toBeTruthy();
});

test('You have to use a "for" loop', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /for\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})
test('You have to use a "for" loop', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /.concat\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})

test("Function mergeTwoList must return an array", () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(Array.isArray(mergeTwoList([3, 4]))).toBe(true);
});

test('The returned array must contain inside all the odd items first', () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');

  const _input_1 = [23, 34, 65, 23, 45, 87, 45, 89, 34, 2, 5, 8];
  const _odds_1 = [23, 65, 23, 45, 87, 45, 89, 5]

  const _input_2 = [3, 5, 4, 12, 13, 15, 16, 17, 20, 26];
  const _odds_2 = [3, 5, 13, 15, 17]

  const arrTest_1 = mergeTwoList(_input_1);
  const arrTest_2 = mergeTwoList(_input_2);

  _odds_1.forEach((num, i) => expect(num).toEqual(arrTest_1[i]))
  _odds_2.forEach((num, i) => expect(num).toEqual(arrTest_2[i]))

});

test('The returned array must contain inside all the even items at the end', () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');

  const _input_1 = [23, 34, 65, 23, 45, 87, 45, 89, 34, 2, 5, 8];
  const _evens_1 = [34, 34, 2, 8]
  const arrTest_1 = mergeTwoList(_input_1);

  const _input_2 = [3, 5, 4, 12, 13, 15, 16, 17, 20, 26];
  const _evens_2 = [4, 12, 16, 20, 26]
  const arrTest_2 = mergeTwoList(_input_2);

  _evens_1.forEach((num, i) => expect(num).toEqual(arrTest_1[i + 8]))
  _evens_2.forEach((num, i) => expect(num).toEqual(arrTest_2[i + 5]))
});
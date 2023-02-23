const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = rewire("./app.js");
const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
const deletePerson = file.__get__('deletePerson');
const people = file.__get__('people');

test('The array "people" should exist', () => {
  const file = rewire("./app.js");
  const people = file.__get__("people");
  expect(people).not.toBe(undefined);
})
test('"daniella" should exist in the "people" array', () => {
  const file = rewire("./app.js");
  const people = file.__get__("people");
  expect(people[3]).toBe('daniella');
})
test('"juan" should exist in the "people" array', () => {
  const file = rewire("./app.js");
  const people = file.__get__("people");
  expect(people[0]).toBe('juan');
})

test("Function deletePerson should exist", function () {
  expect(deletePerson).toBeTruthy();
});

test("Function deletePerson should return something", function () {
  expect(deletePerson()).not.toBe(undefined)
});
test('console.log() function should have been called 3 times', function () {
  //then I import the index.js (which should have the alert() call inside)
  const file = require("./app.js");
  expect(console.log.mock.calls.length).toBe(3);
});

test("If you call the deletePerson function with the name daniella, she cannot appear in the new list.", function () {
  // expect(console.log).toHaveBeenCalledWith(deletePerson('daniella'))
  expect(deletePerson('daniella')).not.toContain('daniella');
});
test("If you call the deletePerson function with the name juan, he cannot appear in the new list.", function () {
  // expect(console.log).toHaveBeenCalledWith(deletePerson('juan'))
  expect(deletePerson('juan')).not.toContain('juan');
});

test("If you call the deletePerson function with the name emilio, he cannot appear in the new list.", function () {
  // expect(console.log).toHaveBeenCalledWith(deletePerson('emilio'))
  expect(deletePerson('emilio')).not.toContain('emilio');
});



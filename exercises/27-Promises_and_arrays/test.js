const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = rewire("./app.js");

test("The function named mockEndpointCall should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('mockEndpointCall');
  expect(myFunc).toBeTruthy();
});

test("The function named checkAllUsers should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('checkAllUsers');
  expect(myFunc).toBeTruthy();
});

const forceDelay = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 1000)
})

test('console.log() function should have been called 3 times', async function () {
  const file = require("./app.js");
  await forceDelay()
  expect(console.log.mock.calls.length).toBe(3);
});

test('Check for logs after Promise resolved or rejected', async function () {
  expect(_buffer.includes("Success: checkA\n")).toBe(true);
  expect(_buffer.includes("Success: checkB\n")).toBe(true);
  expect(_buffer.includes("Success: checkC\n")).toBe(false);
  expect(_buffer.includes("Error: checkC\n")).toBe(true);
});

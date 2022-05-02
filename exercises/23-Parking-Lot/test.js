const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
const file = rewire("./app.js");
const getParkingLotState = file.__get__('getParkingLotState');

test("You should create a function named getParkingLotState", function () {
  expect(getParkingLotState).toBeTruthy();
});

test("The function should return something", function () {
  expect(getParkingLotState([])).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
  const app = require('./app.js');
  expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
  const _app = rewire('./app.js');
  let _parking_state = [
    [1,0,1,1],
    [0,0,0,2],
    [1,1,2,1],
    [2,1,1,1]
  ]
  expect(getParkingLotState(_parking_state)).toEqual({ totalSlots: 12, availableSlots: 3, occupiedSlots: 9 })

});

test('The solution should work with other params', function () {
  const _app = rewire('./app.js');
  let _parking_state = [
    [1,0,1,1,0,2],
    [0,0,0,2,0,1],
    [1,1,2,1,0,1],
    [2,1,1,1,0,2],
  ]
  expect(getParkingLotState(_parking_state)).toEqual({ totalSlots: 16, availableSlots: 5, occupiedSlots: 11 })

});

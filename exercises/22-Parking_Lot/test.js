const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named getParkingLotState", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('getParkingLotState');
  expect(myFunc).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    let _parking_state = [
      [1,1,1],
      [0,0,0],
      [1,1,2]
    ]
    function _getParkingLotState(param){
      let state = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
      }
      for (let i = 0; i < param.length; i++){
        for (let x = 0; x < param[i].length; x++){
          if (param[i][x] === 2){
            
            state.availableSlots += 1
            state.totalSlots += 1
          }
          else if (param[i][x] === 1){
            state.occupiedSlots += 1
            state.totalSlots += 1
          }
        }
      }
    return state
    } 
    
    
    let _test = _getParkingLotState(_parking_state)
    expect(console.log).toHaveBeenCalledWith(_test);
    
  });




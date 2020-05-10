const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("The function named lyricsGenerator should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('lyricsGenerator');
  expect(myFunc).toBeTruthy();
});

test('console.log() function should have been called 5 times', function () {
    //then I import the index.js (which should have the alert() call inside)
    const file = require("./app.js");
    expect(console.log.mock.calls.length).toBe(5);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    function _lyricsGenerator(param){
      let string = "";
        for (let x =0; x < param.length; x++){
          if (param[x] === 0){
            string += "Boom "
          }
          else if (param[x] === 1){
            string += "Drop the base "
            if (param[x-1] === 1 && param[x-2] === 1){
              string += '!!!Break the base!!! '
            }
          }
        }
      return string
    }


    let _test1 = _lyricsGenerator([0,0,1,1,0,0,0])
    let _test2 = _lyricsGenerator([0,0,1,1,1,0,0,0])
    let _test3 = _lyricsGenerator([0,0,0])
    let _test4 = _lyricsGenerator([1,0,1])
    let _test5 = _lyricsGenerator([1,1,1])
    expect(console.log).toHaveBeenCalledWith(_test1);
    expect(console.log).toHaveBeenCalledWith(_test2);
    expect(console.log).toHaveBeenCalledWith(_test3);
    expect(console.log).toHaveBeenCalledWith(_test4);
    expect(console.log).toHaveBeenCalledWith(_test5);
  });





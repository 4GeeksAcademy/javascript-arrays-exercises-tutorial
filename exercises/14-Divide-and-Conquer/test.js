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
// test("Function mergeTwoList should return something", function(){
//   const _app = rewire('./app.js');
//   const mergeTwoList = _app.__get__('mergeTwoList');
//   expect(mergeTwoList()).toBeTruthy();
// });


it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    const mergeTwoList = _app.__get__('mergeTwoList');

    let _list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];  
    let _odd = [];
    let _even = [];
    let _newList = [];
    for (let i = 0; i < _list_of_numbers.length; i++){
      if(_list_of_numbers[i] % 2 == 0){
        _even.push(_list_of_numbers[i])
      }
      else{
        _odd.push(_list_of_numbers[i])
      }
    }
    _newList.push(_odd)
    _newList.push(_even)
      const arrTest = mergeTwoList(_list_of_numbers);
      expect(arrTest).toEqual(_newList);
  });

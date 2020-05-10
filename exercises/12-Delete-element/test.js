const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Function deletePerson should exist", function(){
  const file = rewire("./app.js");
  const delPerson = file.__get__('deletePerson');
  expect(delPerson).toBeTruthy();
});
test("Function deletePerson should return something", function(){
  const file = rewire("./app.js");
  const delPerson = file.__get__('deletePerson');
  expect(delPerson()).toBeTruthy();
});
test('console.log() function should have been called 3 times', function () {
    //then I import the index.js (which should have the alert() call inside)
    const file = require("./app.js");
    expect(console.log.mock.calls.length).toBe(3);
});
test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    var _people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

    function _deletePerson(personName)
    {
      //your code here
      let newArray = [];
      for (let i = 0; i < _people.length; i++){
        if (_people[i] != personName){
          newArray.push(_people[i])
        }
      }
      return newArray
    }


    let _test1 = _deletePerson('daniella')
    let _test2 = _deletePerson('juan')
    let _test3 = _deletePerson('emilio')

    expect(console.log).toHaveBeenCalledWith(_test1);
    expect(console.log).toHaveBeenCalledWith(_test2);
    expect(console.log).toHaveBeenCalledWith(_test3);
  
  });

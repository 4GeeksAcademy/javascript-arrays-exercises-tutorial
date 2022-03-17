const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("You should create a function named filterByName", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('filterByName');
  expect(myFunc).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    let _names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

    //declare your function here
    function _filterByName(theArray, theString){
      let filteredArray = theArray.filter(item => item.toLowerCase().includes(theString.toLowerCase()))
      return filteredArray
    }

    let _test = _filterByName(_names, 'am')
    expect(_buffer).toMatch(_test.map(n => n).join(","));
  });





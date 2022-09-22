const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


test('You have to use the console.log function to print the correct output', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});
test("You shouldn't delete the function named simplifier", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('simplifier');
  expect(myFunc).toBeTruthy();
});


test('The output in the console should should look similar but not exactly (years may vary) to the one in the instructions!', function () {
    const _app = rewire('./app.js');
    let _output = []
    let _people = [
      { name: 'Joe', birthDate: new Date(1986,10,24) },
      { name: 'Bob', birthDate: new Date(1975,5,24) },
      { name: 'Erika', birthDate: new Date(1989,6,12) },
      { name: 'Dylan', birthDate: new Date(1999,12,14) },
      { name: 'Steve', birthDate: new Date(2003,4,24) }
    ];
    let _simplifier = function(person){
      let _today = new Date();
      
      let age = _today.getFullYear() - person.birthDate.getFullYear();
      let m = _today.getMonth() - person.birthDate.getMonth();
        if (m < 0 || (m === 0 && _today.getDate() < person.birthDate.getDate())) {
            age = age - 1;
        }
      return ("Hello, my name is " + person.name + " and I am " + age + " years old")
    };
    
    let _test = _people.map(_simplifier)
    expect(_buffer).toMatch(_test.map(n => n).join(","));
  });

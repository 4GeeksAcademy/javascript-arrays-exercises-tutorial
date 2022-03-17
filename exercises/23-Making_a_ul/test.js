const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("The function named generateLI should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('generateLI');
  expect(myFunc).toBeTruthy();
});
test("The function named filterColors should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('filterColors');
  expect(myFunc).toBeTruthy();
});
test("The function named generateHTMLFromArray should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('generateHTMLFromArray');
  expect(myFunc).toBeTruthy();
});

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    
    let allColors = [
      {label: 'Red', sexy: true},
      {label: 'Pink', sexy: false},
      {label: 'Orange', sexy: true},
      {label: 'Brown', sexy: false},
      {label: 'Pink', sexy: true},
      {label: 'Violet', sexy: true},
      {label: 'Purple', sexy: false},
    ];

    function generateLI(color){
      // your code here
      return "<li>" + color.label + "</li>"
    }

    function filterColors(color){
      // your code here
      if(color.sexy === true){
        return color.label
      }
    }

    function generateHTMLFromArray(array){
      
      let filteredOptions = array.filter(filterColors);
      let LIs = filteredOptions.map(generateLI);

      let htmlString = '<ul>';
      LIs.forEach(function(elm){
        htmlString += elm;
      })
      htmlString += '</ul>';
      return htmlString;
    }

    let _test = generateHTMLFromArray(allColors);
    expect(console.log).toHaveBeenCalledWith(_test);
  });





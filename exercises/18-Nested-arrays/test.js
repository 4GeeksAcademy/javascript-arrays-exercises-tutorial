const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


test('The array "coordinatesArray" should exist', () => {
    const file = rewire("./app.js");
    const coordinatesArray = file.__get__("coordinatesArray");
    expect(coordinatesArray).not.toBe(undefined);
})

test('You have to use "for" loop function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /for\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
  })
  

it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});
// it('The output in the console should match the one in the instructions!', function () {
//     //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
//     expect(_buffer.includes("27278.8125\n")).toBe(true);
// });
it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');

    let _coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];
    let _output = []
    for (let index in _coordinatesArray){
        _output.push(_coordinatesArray[index][1])
    }
    
    expect(_buffer).toMatch(_output.map(n => n).join("\n"));
  });

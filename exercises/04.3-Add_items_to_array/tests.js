const fs = require("fs");
const path = require("path");
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = rewire("./app.js");
const arr = file.__get__("arr");

it('Call the console.log function just one time', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(1);
});

it('Use the Math.floor function for whole numbers.(NO DECIMALS)', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /Math\s*\.\s*floor/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

it('The array arr should have 7 items', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('arr');
    expect(variable).toBeTruthy();
    expect(variable.length).toBe(7);
});

function isNumeric(str) {
  if (typeof str != "number") return true; // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

it('Make sure the last two items you added are numbers', function () {
    const app = rewire('./app.js');
    const variable = app.__get__('arr');
    expect(isNumeric(variable[6])).toBeTruthy();
    expect(isNumeric(variable[5])).toBeTruthy();
});
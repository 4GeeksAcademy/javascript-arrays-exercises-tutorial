const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test('The object "contact" should exist', () => {
  const file = rewire("./app.js");
  const contact = file.__get__("contact");
  expect(contact).not.toBe(undefined);
})

test('You have to use any "for" loop statements', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /for\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})

it('You have to use the console.log function', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');

    let _contact = {
        fullName: "John Doe",
        phone: "123-123-2134",
        email: "test@nowhere.com"
    }
    let _output = []
    for(let _key in _contact){
    // Code goes here
      _output.push(_key + " : " + _contact[_key])
    }
    expect(_buffer).toMatch(_output.map(n => n).join("\n"));

  });

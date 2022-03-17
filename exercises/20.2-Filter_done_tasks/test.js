const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test('You have to use the console.log function to print the correct output.', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    let _tasks = [
      { label: 'Eat my lunch', done: true },
      { label: 'Make the bed', done: false },
      { label: 'Have some fun', done: false },
      { label: 'Finish the replits', done: false },
      { label: 'Replit the finishes', done: true },
      { label: 'Ask for a raise', done: false },
      { label: 'Read a book', done: true },
      { label: 'Make a trip', done: false }
    ];
    let _test = _tasks.filter(item => item.done === true)
    
    expect(_buffer).toMatch(_test.map(n => n).join(","));
    // expect(_buffer).toMatch(_test.map(n => n).join("\n"));
    
  });





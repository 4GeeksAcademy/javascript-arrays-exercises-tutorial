const fs = require("fs");
const path = require("path");
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Call the console.log function on every cicle', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length).toBe(17);
});
test('You have to use a for loop', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /for\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

it('Print the numbers on the console on each loop cicle (inside the loop)', function () {
    expect(_buffer).toMatch("1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n");
});
const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8'); 

test('You have to use the do-while function', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /do\s*/gm
    expect(regex.test(file.toString())).toBeTruthy();
})

it("The output should match the one in the instructions", function () {
    const app = require('./app.js');
    
    let _output = [];
    let i = 20;
    do {
        // Magic goes here;
        if (i % 5 === 0){
            _output.push(i+"!")
            // console.log(i+"!")
        }
        else{_output.push(i)}
        i--;
    } while (i > 0);
    _output.push("LIFTOFF")
 expect(_buffer).toMatch(_output.map(n => n).join("\n"));
});

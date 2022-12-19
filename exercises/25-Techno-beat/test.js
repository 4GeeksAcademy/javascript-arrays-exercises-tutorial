const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("The function named lyricsGenerator should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('lyricsGenerator');
  expect(myFunc).toBeTruthy();
});

test('console.log() function should have been called 5 times', function () {
    //then I import the index.js (which should have the alert() call inside)
    const file = require("./app.js");
    expect(console.log.mock.calls.length).toBe(5);
});

test('The functions returns the correct value when passing different parameters', function () {
    const app = rewire('./app.js');
    const lyricsGenerator = app.__get__('lyricsGenerator');

    let _test1 = lyricsGenerator([0,0,1,1,0,0,0]).trim()
    let _test2 = lyricsGenerator([0,0,1,1,1,0,0,0]).trim()
    let _test3 = lyricsGenerator([0,0,0]).trim()
    let _test4 = lyricsGenerator([1,0,1]).trim()
    let _test5 = lyricsGenerator([1,1,1]).trim()
    let _test6 = lyricsGenerator([1,1,1,0,1,0,1]).trim()

    expect(_test1).toBe("Boom Boom Drop the base Drop the base Boom Boom Boom");
    expect(_test2).toBe("Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom");
    expect(_test3).toBe("Boom Boom Boom");
    expect(_test4).toBe("Drop the base Boom Drop the base");
    expect(_test5).toBe("Drop the base Drop the base Drop the base !!!Break the base!!!");
    expect(_test6).toBe("Drop the base Drop the base Drop the base !!!Break the base!!! Boom Drop the base Boom Drop the base");
});

test('The functions should be returning a string', function () {
    const app = rewire('./app.js');
    const lyricsGenerator = app.__get__('lyricsGenerator');

    let _test1 = lyricsGenerator([0,0,1,1,0,0,0]).trim()
    let _test2 = lyricsGenerator([0,0,1,1,1,0,0,0]).trim()
    let _test3 = lyricsGenerator([0,0,0]).trim()
    let _test4 = lyricsGenerator([1,0,1]).trim()
    let _test5 = lyricsGenerator([1,1,1]).trim()
    let _test6 = lyricsGenerator([1,1,1,0,1,0,1]).trim()

    expect(typeof(_test1)).toBe("string");
    expect(typeof(_test2)).toBe("string");
    expect(typeof(_test3)).toBe("string");
    expect(typeof(_test4)).toBe("string");
    expect(typeof(_test5)).toBe("string");
    expect(typeof(_test6)).toBe("string");
});
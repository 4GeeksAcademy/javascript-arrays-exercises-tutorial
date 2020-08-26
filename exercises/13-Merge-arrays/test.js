const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Function mergeArrays should exist", function(){
  const file = rewire("./app.js");
  const mergeArrays = file.__get__('mergeArrays');
  expect(mergeArrays).toBeTruthy();
});
it('The returned array must contain everything item from firstArray', function () {
    const _app = rewire('./app.js');
    const mergeArrays = _app.__get__('mergeArrays');

    const _chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
    const _chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
    const arrTest = mergeArrays(_chunk_one,_chunk_two);
    expect(arrTest).toEqual(expect.arrayContaining(_chunk_one));
});
it('The returned array must contain everything item from secondArray', function () {
    const _app = rewire('./app.js');
    const mergeArrays = _app.__get__('mergeArrays');

    const _chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
    const _chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
    const arrTest = mergeArrays(_chunk_one,_chunk_two);
    expect(arrTest).toEqual(expect.arrayContaining(_chunk_two));
});
it('The length of the returned array should be equal to the sum of the length of first and second given arrays', function () {
    const _app = rewire('./app.js');
    const mergeArrays = _app.__get__('mergeArrays');

    const _chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
    const _chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
    const arrTest = mergeArrays(_chunk_one,_chunk_two);
    expect(arrTest.length).toEqual(_chunk_one.length + _chunk_two.length);
});

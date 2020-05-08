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
it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');
    const mergeArrays = _app.__get__('mergeArrays');

    const _chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
    const _chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
    let _output = [];
    for (let i = 0; i < _chunk_one.length; i++){
      _output.push(_chunk_one[i])
    }
    for (let x = 0; x < _chunk_two.length; x++){
      _output.push(_chunk_two[x])
    }
    const arrTest = mergeArrays(_chunk_one,_chunk_two);
    expect(arrTest).toEqual(_output);
});

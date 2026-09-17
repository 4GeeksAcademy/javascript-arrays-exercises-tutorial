const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const file = rewire("./app.js");
const studentsIDs = file.__get__("studentsIDs");
const alejandroStudents = file.__get__("alejandroStudents");
const mentorCount = file.__get__("mentorCount");

test("The function named getStudentIds should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('getStudentIds');
  expect(myFunc).toBeTruthy();
});

test("The function named filterStudents should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('filterStudents');
  expect(myFunc).toBeTruthy();
});

test("The function named countStudents should exist", function(){
  const file = rewire("./app.js");
  const myFunc = file.__get__('countStudents');
  expect(myFunc).toBeTruthy();
});

test('Check studentsIDs', function () {
    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    expect(studentsIDs).toStrictEqual([ '123', '124', '125', '126' ]);
});

test('Check alejandroStudents', function () {
    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    expect(alejandroStudents).toEqual([ { id: '124', name: 'Juan', mentor: '457' } ]);
});

test('Check mentorCount', function () {
    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    expect(mentorCount).toEqual({
        '456': { count: 3, textCount: 'Total students: 3' },
        '457': { count: 1, textCount: 'Total students: 1' }
    });
});

const teachersList = [
    'Jose',
    'Alejandro'
]
const teachersIds = [
    '456', // For teacher Jose
    '457'  // For teacher alejandro
]

const studentsList = [
    {
        id: '123',
        name: 'Pedro',
        mentor: '456'
    },
    {
        id: '124',
        name: 'Juan',
        mentor: '457'
    },
    {
        id: '125',
        name: 'Adrian',
        mentor: '456'
    },
    {
        id: '126',
        name: 'Sonia',
        mentor: '456'
    },
]

// Don't change these variables
const studentsIDs = getStudentIds(studentsList)
const alejandroStudents = filterStudents(studentsList, 'Alejandro')
const mentorCount = countStudents(studentsList)

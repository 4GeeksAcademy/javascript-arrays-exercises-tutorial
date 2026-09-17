const teachersList = [
    'Jose',
    'Alejandro'
]
const teachersIds = [
    '456', // For teacher Jose
    '457'  // For teacher alejandro
]

const getStudentIds = (arr) => {
    return arr.map((item) => item.id)
}

const filterStudents = (arr, teacherName) => {
    const [_, alejandro] = teachersList
    const [joseId, alejandroId] = teachersIds
    const filterId = teacherName === alejandro ? alejandroId : joseId
    // let filterId = null
    // const [jose, alejandro] = teachersList
    // const [joseId, alejandroId] = teachersIds
    // switch(teacherName) {
    //     case jose:
    //         filterId = joseId
    //         break;
    //     case alejandro:
    //         filterId = alejandroId
    //         break;
    // }
    return arr.filter((item) => item.mentor === filterId)
}

const countStudents = (arr) => {
    return arr.reduce((prev, curr) => {
        const curCount = prev?.[curr.mentor]?.count ?? 0
        return {
            ...prev,
            [curr.mentor]: {
                count: curCount + 1,
                textCount: `Total students: ${curCount + 1}`
            }
        }
    }, {})
}

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

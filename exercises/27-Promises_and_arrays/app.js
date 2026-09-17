    // List of user Ids
    const studentsIds = [4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570]

    // your code goes here

    const checkA = checkAllUsers(studentsIds, [])
    const checkB = checkAllUsers(studentsIds, [123])
    const checkC = checkAllUsers(studentsIds, [4561, 4565])

    // Handle the promises here
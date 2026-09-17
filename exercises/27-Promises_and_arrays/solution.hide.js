    // List of user Ids
    const studentsIds = [4560, 4561, 4562, 4563, 4564, 4565, 4566, 4567, 4568, 4569, 4570]

    // your code goes here
    const mockEndpointCall = async (userId, blockedSet) => new Promise((resolve, reject) => {
        if (blockedSet.has(userId)) {
            reject('User is blocked')
            return
        }
        resolve('User is available')
    })

    const checkAllUsers = (users, blockedUsers) => {
        const blockedIdsSet = new Set(blockedUsers)
        return users.map(async (item) => {
            const checkStatus = await mockEndpointCall(item, blockedIdsSet)
            return checkStatus
        })
    }

    const checkA = checkAllUsers(studentsIds, [])
    const checkB = checkAllUsers(studentsIds, [123])
    const checkC = checkAllUsers(studentsIds, [4561, 4565])

    // Handle the promises here
    Promise.all(checkA).then(() => console.log('Success: checkA'))
    Promise.all(checkB).then(() => console.log('Success: checkB'))
    Promise.all(checkC).catch(() => console.log('Error: checkC'))
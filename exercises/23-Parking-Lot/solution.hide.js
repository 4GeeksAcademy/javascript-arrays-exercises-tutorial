let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingArray) {
    let state = {
      totalSlots: 0,
      availableSlots: 0,
      occupiedSlots: 0
    }
    for (let i = 0; i < parkingArray.length; i++) {
      for (let x = 0; x < parkingArray[i].length; x++) {
        if (parkingArray[i][x] === 2) {

          state.availableSlots += 1
          state.totalSlots += 1
        }
        else if (parkingArray[i][x] === 1) {
          state.occupiedSlots += 1
          state.totalSlots += 1
        }
      }
    }
    return state
  }

console.log(getParkingLotState(parkingState));

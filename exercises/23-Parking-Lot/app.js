let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingState) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }

  for (let i=0; i<parkingState.length; i++){

    for (let j=0; j<parkingState[i].length; j++){

      if (parkingState[i][j]===1){
        state.occupiedSlots+=1;
       }else {
        if (parkingState[i][j]===2){
          state.availableSlots+=1;
        }
      }
    }
  }
  state.totalSlots = state.occupiedSlots + state.availableSlots;
  
  
  return state;
}

console.log(getParkingLotState(parkingState))

let coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

let longitudeArr = []

for (let i in coordinatesArray) {
   longitudeArr.push(coordinatesArray[i][1])
}
console.log(longitudeArr)
let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function(item) {
   return item[0] === "R";
});

console.log(resultingNames);

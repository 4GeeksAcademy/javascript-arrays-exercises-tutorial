let mixedDataTypes = ['1', '5', '45', '34', '343', '34', 6556, 323];

let newArray = mixedDataTypes.map(function(item) {
	return typeof(item);
});

console.log(newArray)

let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

// your code here
function mergeTwoList(items){
    const ods = items.filter(i => i % 2 !== 0)
    const evens = items.filter(i => i % 2 === 0)
    return ods.concat(evens)
}

console.log(mergeTwoList(list_of_numbers))
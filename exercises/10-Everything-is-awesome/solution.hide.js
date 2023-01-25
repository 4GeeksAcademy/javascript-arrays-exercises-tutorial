// Solution 1

let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
           return_array.push(item === 1 ? item : 'Yahoo')
            
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));

// Solution 2

let myArray2 = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos2 = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            if (item === 1) {
                return_array.push(item)
            }else{
                return_array.push('Yahoo')

            }
            
    });
    return return_array;
};

console.log(ZerosToYahoos2(myArray2));
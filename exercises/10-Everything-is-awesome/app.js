let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            console.log(item);
            if (item == 1) {
                return_array.push(item);
            }
            else if (item == 0) {
                return_array.push("Yahoo");
            }
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
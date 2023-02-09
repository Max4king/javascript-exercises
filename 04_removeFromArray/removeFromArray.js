const removeFromArray = function(arr, ...val) {
    for (let i=0; i < val.length; i++) {
        let index = arr.indexOf(val[i]);
        console.log(index);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

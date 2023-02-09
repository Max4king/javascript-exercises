const sumAll = function(start, end) {
    let total = 0;
    if ( !Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i=start; i <= end; i++) {
        total += i;
    }
    return total;
};

let ans = sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
console.log(ans);


// Do not edit below this line
module.exports = sumAll;

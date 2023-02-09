const repeatString = function(word, num) {
    let str = "";
    for (i=0; i<num;i++) {
        str = str + word;
    }
    if (num < 0) return "ERROR";
    return str;
};

// Do not edit below this line
module.exports = repeatString;

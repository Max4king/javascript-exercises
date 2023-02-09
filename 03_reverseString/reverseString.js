const reverseString = function(string) {
    let tmp = "";
    let new_string = (string.split("")).reverse();
    return new_string.join("");
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
    let new_str = str.replace(/[^a-zA-Z]+/g,"")
    let arr = new_str.toLowerCase() .split("");
    let arr_len = arr.length - 1;
    for (let i=0; i < arr_len/2;i++) {
        if (arr[i] !== arr[arr_len-i]) {
            return false;
        }
    }
    return true;
};

let ans = palindromes('Animal loots foliated detail of stool lamina.');

console.log(ans)

// Do not edit below this line
module.exports = palindromes;

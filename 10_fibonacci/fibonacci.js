const fibonacci = function(index) {
    let a = 1;
    let b = 1;
    if (index < 0) {
        return "OOPS"
    }

    for (i=1;i < index-1;i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

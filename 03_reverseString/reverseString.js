const reverseString = function(str="") {
    let revStr =""
    for (let index = str.length-1; index >= 0; index--) {
        revStr += str.charAt(index);
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;

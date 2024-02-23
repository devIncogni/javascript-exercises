const repeatString = function(str="", no=0) {
    if (no<0) {
        return "ERROR"
    }
    let strf="";
    for (let index = 0; index < no; index++) {
        strf += str;        
    }
    return strf;
};

// console.log(repeatString("Arin", 0))

// Do not edit below this line
module.exports = repeatString;

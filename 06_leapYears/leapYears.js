const leapYears = function(year=0) {
    if (year % 100 == 0 && year % 400 != 0 || year % 4 != 0) {
        return false;
    } else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;

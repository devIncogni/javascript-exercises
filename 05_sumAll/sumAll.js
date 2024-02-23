const sumAll = function(num1 = 0, num2 = 0) {

    if(typeof num1 != "number" || typeof num2 != "number" || num1<0 || num2 < 0){
        return "ERROR"
    }

    if (num1 > num2) {
        return num1 + sumAll(num2,num1-1);
    }

    else if (num1 < num2) {
        return num2 + sumAll(num1,num2-1);
    }

    else {
        return num1;
    }
    
};
console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;

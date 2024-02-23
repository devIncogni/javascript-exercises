const removeFromArray = function (arr = []) {
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arguments[i]) {
        arr.splice(j, 1);
        if (j > 0) {
          j--;
        }
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

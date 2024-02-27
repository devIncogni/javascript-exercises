/**
 *
 * @param {Array} arrayOfObjects
 */
const getTheTitles = function (arrayOfObjects) {
  let farr = arrayOfObjects.reduce((redArr, currentObj) => {
    redArr.push(currentObj.title);
    return redArr;
  }, []);
  return farr;
};

// Do not edit below this line
module.exports = getTheTitles;

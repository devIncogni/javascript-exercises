/**
 *
 * @param {String} strings
 */
const palindromes = function (strings) {
  let revarr = [];
  let ab = "abcdefghijklmnopqrstuvwxyz1234567890";
  let arr = Array.from(strings.toUpperCase());
  console.log(arr);
  arr= arr.filter((character) => {
    if (ab.toUpperCase().indexOf(character) == -1) {
      return false;
    } else {
      return true;
    }
  });
  revarr = [...arr];
  revarr.reverse();
  console.log(arr);
  console.log(revarr);

  if (arr.toString() == revarr.toString()) {
    return true;
  } else {
    return false;
  }
};

// console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;

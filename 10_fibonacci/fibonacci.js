const fibonacci = function (d) {
  if (d < 0) {
    return "OOPS";
  }
  let a = 0,
    b = 1;
  for (let i = 0; i < d; i++) {
    b = a + b;
    let c = a;
    a = b;
    b = c;
    // console.log(a);
  }
  return a;
};

// fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;

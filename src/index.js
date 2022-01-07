module.exports = function reverse (n) {
    let nReverse = 0;
    n = checkNegative(n);
    while (n >= 1) {
      let lastNumber = n % 10;
      nReverse = (nReverse * 10) + lastNumber;
      n = Math.trunc(n / 10);
    }
    return nReverse;
  }

  const checkNegative = (n) => {
    if (n < 0) { n = Math.abs(n) }
    return n;
  }

module.exports = function reverse (n) {
  let reversNum = 0;
  n=Math.abs(n);
  while (n){
    reversNum = reversNum * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return reversNum;
}

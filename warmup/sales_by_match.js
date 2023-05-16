/*
There is a large pile of socks that must be paired by color. Given an array of 
integers representing the color of each sock, determine how many pairs of socks 
with matching colors there are.

Example:
n = 7
ar = [1,2,1,2,1,3,2]
return: 2

https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

// time complexity O(n)
// space complexity O(n)
function sockMerchant(n, ar) {
  var socks = {};
  for (let ele of ar) {
    if (socks[ele] === undefined) {
      socks[ele] = 1;
    } else {
      socks[ele]++;
    }
  }

  var pair = 0;
  for (let key in socks) {
    pair += Math.floor(socks[key] / 2);
  }
  return pair;
}

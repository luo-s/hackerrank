/*
There is a string, s, of lowercase English letters that is repeated 
infinitely many times. Given an integer, n, find and print the number 
of letter a's in the first n letters of the infinite string.

Example:
s = 'abcac' -- s contains only lowercase English letters
n = 10
return: 4

https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/
function repeatedString(s, n) {
  let countFull = 0;
  for (let letter of s) {
    if (letter === "a") countFull++;
  }
  let overflow = n % s;
  let count = 0;
  for (let i = 0; i < overflow; i++) {
    if (s[i] === "a") count++;
  }
  return count + Math.floor(n / s) * countFull;
}

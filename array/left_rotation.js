/*
A left rotation operation on an array shifts each of the array's elements 
1 unit to the left. For example, if 2 left rotations are performed on array 
[1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest 
index item moves to the highest index in a rotation. This is called a circular 
array.

Given an array a of n integers and a number, d, perform d left rotations on 
the array. Return the updated array to be printed as a single line of 
space-separated integers.

Example:
a = [1,2,3,4,5]
d = 4
return: [5,1,2,3,4]

https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*/

// time complexity O(n)
// space complexity O(n)
function rotLeft(a, d) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[(i + d) % a.length]);
  }
  return result;
}

//in-place algorithm
// time commplexity O(n^2);
// space complexity O(1);
function rotLeft(a, d) {
  const l = a.length;
  let r = d % l;
  while (r > 0) {
    let temp1 = a[0];
    let temp2;
    for (let i = l - 1; i >= 0; i--) {
      temp2 = a[i];
      a[i] = temp1;
      temp1 = temp2;
    }
    r--;
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 1));

/*
An avid hiker keeps meticulous records of their hikes. During the last hike 
that took exactly  steps, for every step it was noted if it was an uphill, U, 
or a downhill, D step. Hikes always start and end at sea level, and each step 
up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a 
step up from sea level and ending with a step down to sea level.

A valley is a sequence of consecutive steps below sea level, starting with a 
step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the 
number of valleys walked through.

Example: 
steps = 8
path = [DDUUUUDD] -- path contains only 'U' or 'D'
return: 2

https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
*/

// time comlexity O(n)
// space complexity O(n)
function countingValleys(steps, path) {
  let levels = [];
  let level = 0;
  for (let ele of path) {
    ele === "D" ? level-- : level++;
    levels.push(level);
  }
  let valleyCount = 0;
  for (let i = 1; i <= levels.length; i++) {
    if (levels[i] === 0 && levels[i - 1] < 0) {
      valleyCount++;
    }
  }
  return valleyCount;
}

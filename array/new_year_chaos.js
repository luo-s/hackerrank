/*
It is New Year's Day and people are in line for the Wonderland rollercoaster 
ride. Each person wears a sticker indicating their initial position in the 
queue from 1 to n. Any person can bribe the person directly in front of them 
to swap positions, but they still wear their original sticker. One person can 
bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue 
order. Print the number of bribes, or, if anyone has bribed more than two 
people, print Too chaotic.

Example:
q = [1,2,3,5,4,6,7,8] => print 1
q = [4,1,2,3] => print "Too chaotic"
*/

function minimumBribes(q) {
  let count = 0;
  for (let i = q.length - 2; i >= 0; i--) {
    if (q[i] > i + 3) {
      console.log("Too chaotic");
      return;
    } else if (q[i] > i + 2) {
      if (q[i + 1] > q[i + 2]) {
        const temp = q[i];
        q[i] = q[i + 2];
        q[i + 2] = temp;
        count += 3;
      } else {
        const temp = q[i];
        q[i] = q[i + 1];
        q[i + 1] = q[i + 2];
        q[i + 2] = temp;
        count += 2;
      }
    } else if (q[i] > i + 1) {
      let temp = q[i];
      q[i] = q[i + 1];
      q[i + 1] = temp;
      count++;
    }
  }
  console.log(count);
  return;
}

/*
There is a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. The player can 
jump on any cumulus cloud having a number that is equal to the number of the 
current cloud plus 1 or 2. The player must avoid the thunderheads. Determine 
the minimum number of jumps it will take to jump from the starting postion to 
the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe 
or 1 if they must be avoided.

Example
c = [0,1,0,0,0,1,0] -- c contains only 0 or 1
return: 3

https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/
function jumpingOnClouds(c) {
  if (c.length <= 3) {
    return 1;
  } else {
    return c[2] === 1
      ? 1 + jumpingOnClouds(c.slice(1))
      : 1 + jumpingOnClouds(c.slice(2));
  }
}

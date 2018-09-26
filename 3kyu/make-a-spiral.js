/**
 * Your task, is to create a NxN spiral with a given size.

 For example, spiral with size 5 should look like this:

 00000
 ....0
 000.0
 0...0
 00000
 and with the size 10:

 0000000000
 .........0
 00000000.0
 0......0.0
 0.0000.0.0
 0.0..0.0.0
 0.0....0.0
 0.000000.0
 0........0
 0000000000
 Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

 [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 Because of the edge-cases for tiny spirals, the size will be at least 5.

 General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
 */



/**
 * @param {number} size
 * @return {number[][]}
 */
var spiralize = function(size) {
  let sp = new Array(size).fill().map(() => new Array(size).fill(0));
  let spiraling = true;
  let d = 'R';
  let r = 0, c = 0, pos, lr, lc;

  while (spiraling) {
    if (sp[r][c] === 1) {
      spiraling = false;
    }
    switch (d) {
      case 'R':
        lr = r, lc = c;
        sp[r][c] = 1;
        pos = c + 2 < size ? 2 : 1;
        if (c + 1 < size && sp[r][c + pos] !== 1) {
          c++;
        } else if (sp[r+2][c] !== 1 && sp[r+1][c-1] !== 1) {
          d = 'D';
          r++;
        } else {
          spiraling = false;
        }
        break;
      case 'D':
        lr = r, lc = c;
        sp[r][c] = 1;
        pos = r + 2 < size ? 2 : 1;
        if (r + 1 < size && sp[r + pos][c] !== 1) {
          r++;
        } else if (sp[r][c-2] !== 1 && sp[r-1][c-1] !== 1) {
          d = 'L';
          c--;
        } else {
          spiraling = false;
        }
        break;
      case 'L':
        lr = r, lc = c;
        sp[r][c] = 1;
        pos = c - 2 > -1 ? 2 : 1;
        if (c - 1 > -1 && sp[r][c - pos] !== 1) {
          c--;
        } else if (sp[r-2][c] !== 1 && sp[r-1][c+1] !== 1) {
          d = 'U';
          r--;
        } else {
          spiraling = false;
        }
        break;
      case 'U':
        lr = r, lc = c;
        sp[r][c] = 1;
        pos = r - 2 > -1 ? 2 : 1;
        if (r - 1 > -1 && sp[r - pos][c] !== 1) {
          r--;
        } else if (sp[r][c+2] !== 1 && sp[r+1][c+1] !== 1) {
          d = 'R';
          c++;
        } else {
          spiraling = false;
        }
    }
  }

  return sp;
}
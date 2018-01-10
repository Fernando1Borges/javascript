function LCS(x, y) {
  x = x.split('');
  y = y.split('');
  m = x.length;
  n = y.length;
  var lcs = [];
  for (var i = 0; i < m+1; i++) {
    for (var j = 0; j < n+1; j++) {
      if (j === 0) {
        lcs[i] = [];
      }
      if (i === 0 || j === 0) {
        lcs[i][j] = 0;
      } else if (x[i-1] === y[j-1]) {
        lcs[i][j] = lcs[i-1][j-1]+1;
      } else {
        lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1]);
      }
    }
  }
  return findLCS(lcs, m, n, x);
}

function findLCS(lcs, m, n, x) {
  console.log(lcs, m, n, x);
  var currentNum = lcs[m][n];
  var result = [];
  while (currentNum > 0 && m > 0 && n >0) {
    if (lcs[m-1][n] === lcs[m][n]-1 && lcs[m][n-1] === lcs[m][n]-1) {
      m--;
      n--;
      result.unshift(x[m]);
      currentNum--;
    } else if (lcs[m-1][n] === lcs[m][n-1]) {
      m--;
      n--;
    } else if (lcs[m-1][n] === lcs[m][n]-1) {
      n--;
    } else if (lcs[m][n-1] === lcs[m][n]-1) {
      m--;
    }
  }
  return result.join('');
}
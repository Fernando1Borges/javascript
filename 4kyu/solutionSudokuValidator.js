function validSolution(board){
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if (invalidBlock(i, j, board)) {
        return false;
      }
    }
  }
  return true;
}

function invalidBlock(i, j, board) {
  var dict = {'1':true,'2':true,'3':true,'4':true,'5':true,'6':true,'7':true,'8':true,'9':true};
  i = i*3;
  j = j*3;
  for(var m = 0; m < 3; m++) {
    for(var n = 0; n < 3; n++) {
      var num = board[m+i][n+j];
      if (num === 0 || !dict[num]) {
        return true;
      } else {
        dict[num] = false;
      }
    }
  }
  return false;
}
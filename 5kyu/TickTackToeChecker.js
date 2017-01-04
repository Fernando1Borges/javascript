function isSolved(arr) {
  var blanksCount = 0,
      sets = [],
      column = [],
      diagonal1 = [],
      diagonal2 = [];

  // get all possible combinations into sets array
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      column.push(arr[j][i]);
    }
    sets.push(column);
    column = [];
    sets.push(arr[i]);
    diagonal1.push(arr[i][i]);
    diagonal2.push(arr[i][2-i]);
  }
  sets.push(diagonal1);
  sets.push(diagonal2);

  // Check combinations in sets array for winner and contents
  for(var k = 0; k < sets.length; k++) {
    if (check(sets[k]) == 1)
      return 1;
    if (check(sets[k]) == 2)
      return 2;
    if (check(sets[k]) == 3)
      blanksCount++;
  }

  return (blanksCount > 0) ? -1:0 ;
}

function check(arr) {
  arr = arr.toString();
  var regexpZero = /0/g,
      regexpOne = /1/g,
      regexpTwo = /2/g,
      countOne = 0,
      countTwo = 0,
      countThree = 0;
  countZero = (arr.toString().match(regexpZero) === null) ? 0 : arr.match(regexpZero).length;
  countOne = (arr.toString().match(regexpOne) === null) ? 0 : arr.match(regexpOne).length;
  countTwo = (arr.toString().match(regexpTwo) === null) ? 0 : arr.match(regexpTwo).length;

  if(countOne == 3)
  return 1;
  else if(countTwo == 3)
  return 2;
  else if (countZero !== 0)
  return 3;
  else
    return 4;
}


isSolved([[0,0,1],
                       [0,1,2],
                       [2,1,0]])

//check([0,1,1]);


// Test.expect(isSolved([[0,0,1],
//                       [0,1,2],
//                       [2,1,0]]) === -1);



// Other solutions

// credit: By-The-Ocean
// function isSolved(board) {
//
//   function checkHor() {
//   var res;
//     board.forEach(function(item){
//       if (item[0] == item[1] &&
//           item[0] == item[2] &&
//           item[1] == item[2] &&
//           item[0] != 0)
//       res = item[0];
//     });
//     return res;
//   }
//
//   function checkVer() {
//     for (var a = 0; a< 3; a++)
//     {
//     if (board[0][a]==board[1][a]&&
//         board[1][a]==board[2][a]&&
//         board[2][a]==board[0][a]&&
//         board[0][a]!=0)
//         return board[0][a];
//     }
//   }
//
//   function checkA1(){
//   if ((board[0][0]==board[1][1]&&
//        board[1][1]==board[2][2]&&
//        board[2][2]==board[0][0])||
//      ( board[0][2]==board[1][1]&&
//        board[1][1]==board[2][0]&&
//        board[2][0]==board[0][2]))
//       return board[1][1];
//   }
//
//
//   function gameOver() {
//   for (var x = 0; x < 3; x++)
//   for (var y = 0; y < 3; y++)
//     if  (board[x][y] == 0)
//       return -1;
//   return 0;
//   }
//
//   return checkHor() || checkVer() || checkA1() || gameOver();
// }


// credit: kirjs
// function isSolved(board) {
//    board = board.join('-').replace(/,/g,'');
//    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//    if(/0/.test(board)) return -1;
//    return 0;
// }

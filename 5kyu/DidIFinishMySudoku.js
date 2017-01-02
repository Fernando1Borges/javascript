// 5kyu Kata
// Completed 01/02/2017

function doneOrNot(board){
  var rowFinished = false;
  var regionsFinished = false;
  var row = [];
  var column = [];
  var region1 = [];
  var region2 = [],
      region3 = [],
      region4 = [],
      region5 = [],
      region6 = [],
      region7 = [],
      region8 = [],
      region9 = [];
  var columnFinished = false;

  // check rows
  var count = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      row.push(board[i][j]);

    }
    if (check(row))
          count++;
    row = [];
  }
console.log(count);
  if (count == 9)
      rowFinished = true;
  else
      return "Try again!";

  // Check Columns
  count = 0;
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }

      if (check(column))
          count++;
      column = [];
  }

  if (count == 9)
      columnFinished = true;


  // Check regions
  for ( i = 0; i < board.length; i++) {
    for (j = 0; j < board.length; j++) {
     // board[0][0]

     if(i < 3 && j < 3) {
        region1.push(board[i][j]);
     } else if(i < 3 && j < 6 && j > 2) {
        region2.push(board[i][j]);
     } else if(i < 3 && j < 9 && j > 5) {
        region3.push(board[i][j]);
     } else if(i > 2 && i < 6 && j < 3) {
        region4.push(board[i][j]);
     } else if(i > 2 && i < 6 && j < 6 && j > 2) {
        region5.push(board[i][j]);
     } else if(i > 2 && i < 6 && j < 9 && j > 5) {
        region6.push(board[i][j]);
     } else if(i > 5 && j < 3) {
        region7.push(board[i][j]);
     } else if(i > 5 && j < 6 && j > 2) {
        region8.push(board[i][j]);
     } else if(i > 5 && j < 9 && j > 5) {
        region9.push(board[i][j]);
     }

    }
  }
  if(check(region1) && check(region2) && check(region3) && check(region4) && check(region5) && check(region6) && check(region7) && check(region8) && check(region9))
    regionsFinished = true;

  return (columnFinished && rowFinished && regionsFinished) ? "Finished!":"Try again!";


}

function check(arr) {
  if (arr.length != 9)
    return false;

  var one = false,
      two = false,
      three = false,
      four = false,
      five = false,
      six = false,
      seven = false,
      eight = false,
      nine = false;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 1 && !one) {
      one = true;
    } else if(arr[i] == 2 && !two) {
      two = true;
    } else if(arr[i] == 3 && !three) {
      three = true;
    } else if(arr[i] == 4 && !four) {
      four = true;
    } else if(arr[i] == 5 && !five) {
      five = true;
    } else if(arr[i] == 6 && !six) {
      six = true;
    } else if(arr[i] == 7 && !seven) {
      seven = true;
    } else if(arr[i] == 8 && !eight) {
      eight = true;
    } else if(arr[i] == 9 && !nine) {
      nine = true;
    } else {
      return false;
    }
  }
  return true;
}

// Test
// doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                         [3, 4, 5, 2, 8, 6, 1, 7, 9]])
// should return "Finished!"

// Other Solutions
// Credit: Botanic, fs1923

// function doneOrNot(board){
//   var set1Array = new Set(),
//       set2Array = new Set(),
//       set3Array = new Set();
//
//   for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++){
//       set1Array.add(board[i][j]);
//       set2Array.add(board[j][i]);
//       set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
//     }
//     if (set1Array.size != 9 || set2Array.size != 9 || set3Array.size != 9 )
//       return "Try again!";
//     set1Array.clear();
//     set2Array.clear();
//     set3Array.clear();
//   }
//   return "Finished!";
// }

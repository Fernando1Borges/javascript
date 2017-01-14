// 4kyu Kata completed 0111317

function pascalsTriangle(n) {
  let result = [1], count = 1, prevArr = result, newArr = [];
  while(count <= n) {
    for(var i = 0; i < prevArr.length; i++) {
      if(prevArr.length == 1) result.concat([1,1]);
      else if(i === 0) newArr.push(prevArr[i]);
      else if(i == prevArr.length - 1) {
        newArr.push(prevArr[i - 1] + prevArr[i]);
        newArr.push(prevArr[i]);
      } else {
        newArr.push(prevArr[i - 1] + prevArr[i]);
      }
    }
    if(prevArr.length == 1) {
      prevArr = [1,1]
    } else {
      result = result.concat(prevArr)
      prevArr = newArr;
    }
    newArr = [];
    count++;
  }
  return result;
}

// TEST
pascalsTriangle(4)// should return : [1,1,1,1,2,1,1,3,3,1]

// OTHER SOLUTIONS
// Credit: danielmcq, mrlinn69, suva, testtest123, Sagobunny, jwong483 (plus 5 more warriors)

// function pascalsTriangle(n) {
//   var pascal = [];
//   var idx = 0;
//
//   for ( var i = 0; i < n; i++ ) {
//     idx = pascal.length - i;
//     for ( var j = 0; j < i+1; j++ ) {
//       if ( j === 0 || j === i ) {
//         pascal.push(1);
//       } else {
//         pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
//       }
//     }
//   }
//
//   return pascal;
// }

// 4kyu Kata completed on 011117

snail = function(arr) {
    if(arr.length == 1)
    return arr[0];
  var sideL = [], results = [];
  var oneByOnePush = function(item) {
    results.push(item);
  };
  while(arr.length > 0) {
    arr[0].forEach(oneByOnePush);
    arr.splice(0, 1);
    if (arr.length > 1) {
      for(var i = 0; i < arr.length - 1; i++) {
        results.push(arr[i][arr[i].length - 1]);
        arr[i].splice(arr[i].length - 1, 1);
        sideL.push(arr[arr.length - 2 - i][0]);
        arr[arr.length - 2 - i].splice(0, 1);
      }
    }
    if(arr.length === 0) {
      break;
    }else {
      arr[arr.length - 1].reverse().forEach((oneByOnePush));
      arr.splice(arr.length - 1, 1);
      sideL.forEach(oneByOnePush);
      sideL = [];
      console.log(arr);
    }
  }
  return results;
}

snail([ [ 1, 2, 3, 4, 5, 6 ],
  [ 20, 21, 22, 23, 24, 7 ],
  [ 19, 32, 33, 34, 25, 8 ],
  [ 18, 31, 36, 35, 26, 9 ],
  [ 17, 30, 29, 28, 27, 10 ],
  [ 16, 15, 14, 13, 12, 11 ] ]);
// TEST CASES
// [ [ 1, 2, 3, 4, 5, 6 ],
//   [ 20, 21, 22, 23, 24, 7 ],
//   [ 19, 32, 33, 34, 25, 8 ],
//   [ 18, 31, 36, 35, 26, 9 ],
//   [ 17, 30, 29, 28, 27, 10 ],
//   [ 16, 15, 14, 13, 12, 11 ] ]
// ✘ snail([]) - Expected: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]', instead got: '\'1,2,3,4,5,6, 7, 8, 9, 10, 11,12,13,14,15,16, 17,18,19,20\''

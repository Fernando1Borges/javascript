//7kyu kata
//Completed 12/26/16

var buy = function(x, arr){
  for (var i = 0; i<arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == x && j != i)
        return [i, j];
    }
  }
  return null;
};

// Sample test cases
buy(2,[1,1])// should return [0,1]
// Test.assertSimilar(buy(2,[1,1]), [0,1]);
// Test.assertSimilar(buy(3,[1,1]), null);
// Test.assertSimilar(buy(5,[5,2,3,4,5]), [1,2]);
// Test.assertSimilar(buy(5,[1,2,3,4,5]), [0,3]);
// Test.assertSimilar(buy(5,[0,0,0,2,3]), [3,4]);

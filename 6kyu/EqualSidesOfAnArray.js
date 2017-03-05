// 6kyu kata completed 030517

function findEvenIndex(arr)
{
  var sum = function(a, b) {
    return a + b;
  }
  for(var i = 1; i < arr.length - 1; i++) {
    var part1 = arr.slice(0, i);
    var part2 = arr.slice(i + 1);
    if(part1.reduce(sum) == part2.reduce(sum))
        return i;
  }
  return -1;
}

//TEST CASES
Test.describe("FindEvenIndex", function() {
  Test.it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});

//OTHER SOLUTIONS

//okeydoke80, wrousse, cucubau3000, eriksudd, qu3rn

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

//zoid, juanmatg, Instigator

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
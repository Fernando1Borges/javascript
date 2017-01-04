// 7kyu Kata created by Konrad Gnat
// 01/04/16

// Initial solution
// function pyramid(height, area) {
//   // Your code here...
// }

// Complete Solution
function pyramid(height, area) {
    var str = "";
    var base = area / height;
    var count = 0;
    while(count < (base * 2)) {
      str += "X";
      count++;
    }
    return str;
}


//Test cases

//
// describe("pyramid", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(pyramid(8, 48), 'XXXXXXXXXXXX');
//     Test.assertEquals(pyramid(22, 220), 'XXXXXXXXXXXXXXXXXXXX');
//     Test.assertEquals(pyramid(14, 112), 'XXXXXXXXXXXXXXXX');
//   });
// });

describe("pyramid", function(){
  it("should work for some examples", function(){
    Test.assertEquals(pyramid(8, 48), 'XXXXXXXXXXXX');
    Test.assertEquals(pyramid(22, 220), 'XXXXXXXXXXXXXXXXXXXX');
    Test.assertEquals(pyramid(14, 112), 'XXXXXXXXXXXXXXXX');
  });
});

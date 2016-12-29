// 6 kyu Kata
// completed 12/29/16
function findNb(m) {

    var total = 0;
    var n = 0;

    while(total < m) {
      n++;
      total += Math.pow(n, 3);
    }
    return (m == total) ? n:-1;
}

//TEsts
// Test.describe("Basic tests",function() {

// Test.assertEquals(findNb(4183059834009), 2022)
// Test.assertEquals(findNb(24723578342962), -1)
// Test.assertEquals(findNb(135440716410000), 4824)
// Test.assertEquals(findNb(40539911473216), 3568)
// })

//Other Solutions
// Credit: kanzelm3, michaelaflores, cranej, zuka123456, zasqdw, alex030293 (plus 2 more warriors)
//
// function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

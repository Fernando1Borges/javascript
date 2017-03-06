// 6kyu Kata completed 030617

function iqTest(numbers){
  
  var num = numbers.split(' ');
  var even = num.filter(function(a) {
    return a % 2 === 0;
  });
  var odd = num.filter(function(a) {
    return a % 2 !== 0;
  });
  return (even.length > odd.length) ? num.indexOf(odd[0]) + 1 : num.indexOf(even[0]) + 1;
  
}

//TEST CASES
iqTest("2 4 7 8 10");


// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);


// OTHER SOLUTIONS

//elmaano, classic016, Fantom1991, polluxCast0r, kaym0, pawelputko (plus 14 more warriors)

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

//function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}
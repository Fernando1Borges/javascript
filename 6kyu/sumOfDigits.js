// 6kyu kata completed 031817
// Description:

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works (Ruby example given):

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2


function digital_root(n) {
  if(String(n).length < 2) {
    return n;
  } 
  var str = String(n).split('');
  str = str.reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0)
  return digital_root(parseInt(str));
}

//OTHER SOLUTIONS

//alkoth, fidelius, FunGuy, rojohnmico, Mattordrag, Binayre (plus 58 more warriors)

function digital_root(n) {
  return (n - 1) % 9 + 1;
}


//ryan.ivan.dsouza, Error 404

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

//nikolas_23, v02468, RomanYablonski, magicfoxx

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}
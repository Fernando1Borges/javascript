/**
 * 
 * solved 05/25/2018
 * 
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.
 *  
 */

function hamming (n) {
  if (n === 1) {
    return 1;
  }
  let i2 = i3 = i5 = 0;
  let hNums = [1];
  let next_2 = hNums[i2]*2;
  let next_3 = hNums[i3]*3;
  let next_5 = hNums[i5]*5;
  while (hNums.length < n) {
    next_hNum = Math.min(next_2, next_3, next_5);
    hNums.push(next_hNum);

    if (next_hNum === next_2) {
      i2++;
      next_2 = hNums[i2]*2;
    }

    if (next_hNum === next_3) {
      i3++;
      next_3 = hNums[i3]*3;
    }

    if (next_hNum === next_5) {
      i5++;
      next_5 = hNums[i5]*5;
    }
  }

  return hNums[n-1];
}

// TESTS

console.log(hamming(1) );//== 1, "console.log(hamming(1) );//should be 1";
console.log(hamming(2) );//== 2, "console.log(hamming(2) );//should be 2";
console.log(hamming(3) );//== 3, "console.log(hamming(3) );//should be 3";
console.log(hamming(4) );//== 4, "console.log(hamming(4) );//should be 4";
console.log(hamming(5) );//== 5, "console.log(hamming(5) );//should be 5";
console.log(hamming(6) );//== 6, "console.log(hamming(6) );//should be 6";
console.log(hamming(7) );//== 8, "console.log(hamming(7) );//should be 8";
console.log(hamming(8) );//== 9, "console.log(hamming(8) );//should be 9";
console.log(hamming(9) );//== 10, "console.log(hamming(9) );//should be 10";
console.log(hamming(10));// == 12, "console.log(hamming(10));// should be 12";
console.log(hamming(11));// == 15, "console.log(hamming(11));// should be 15";
console.log(hamming(12));// == 16, "console.log(hamming(12));// should be 16";
console.log(hamming(13));// == 18, "console.log(hamming(13));// should be 18";
console.log(hamming(14));// == 20, "console.log(hamming(14));// should be 20";
console.log(hamming(15));// == 24, "console.log(hamming(15));// should be 24";
console.log(hamming(16));// == 25, "console.log(hamming(16));// should be 25";
console.log(hamming(17));// == 27, "console.log(hamming(17));// should be 27";
console.log(hamming(18));// == 30, "console.log(hamming(18));// should be 30";
console.log(hamming(19));// == 32, "hamming(19) should be 32";
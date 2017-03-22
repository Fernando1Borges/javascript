// Mutual Recursion

// In JavaScript there is a concept of function and variable "hoisting". (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

// Due to this compilation strategy JavaScript retains the ability to do mutual recursion. This means you can have all the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

// Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))
// Don't worry about negative numbers, n will always be greater than zero.

// Hofstadter Wikipedia Reference http://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences


function F(n) { 
  if (n == 0) {
    return 1;
  }
  return n - M(F(n - 1));
}

function M(n) { 
  if (n == 0) {
    return 0;
  }
  return n - F(M(n - 1));  
}

// OTHER SOLUTIONS

//OverZealous, wthit56, noLan, zacksmith, FesterBesterTester, nivoliev (plus 42 more warriors)

function F(n) {
  return n === 0 ? 1 : n - M(F(n - 1));
}
 
function M(n) {
  return n === 0 ? 0 : n - F(M(n - 1));
}

//laoris

/* This version memoizes results so they're just computed once. */
function S(gender, n) {
  var index = 2 * n + gender;
  if (!(index in S))
    S[index] = n ? n - S(!gender, S(gender, n - 1)) : gender;
  return S[index];
}

function F(n) { return S(1, n); }
function M(n) { return S(0, n); }






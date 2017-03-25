// 6kyu kata completed 032417

Description:

Helper Functions and Recursion - Factorials, Permutations and Combinations

Your task:

Define a function factorial that takes a parameter n and returns its factorial (e.g. factorial(5) === 120; factorial(3) === 6). This function must be recursively defined (there will be tests for this).
Using your factorial function, define a function P(n, r) that returns the number of permutations of n objects taken r at a time, e.g. P(5, 2) === 20. Again, whether you have used the factorial function in defining this function will be tested.
Using both the factorial and P functions, define a function C(n, r) that returns the number of combinations of n objects taken r at a time, e.g. C(6, 3) === 20. Once again, this will be tested.
Apart from the instructions above, there is also a very strict character limit for each function, so be concise! :)

function factorial(n) {
  return (n<2) ? 1 : n*factorial(n-1);
}
function P(n,r) {
  return factorial(n)/factorial(n-r); 
}
function C(n,r) {
  return P(n,r)/factorial(r);
}

//OTHER SOLUTIONS

// timp

var factorial=n=>n>1?n*factorial(n-1):1;
var P=(n,r)=>factorial(n)/factorial(n-r);
var C=(n,r)=>P(n,r)/factorial(r);\


//pwynn

function factorial(n) {
  return n ? n * factorial(n-1) : 1
}
function P(n, r) {
  return factorial(n) / factorial(n-r)
}
function C(n, r) {
  return P(n, r) / factorial(r)
}
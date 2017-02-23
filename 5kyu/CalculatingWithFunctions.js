// 5kyu kata completed 022317

// CalculatingWithFunctions.js

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand


function create(num, func) {
	if (func === undefined) {
		return num;
	} else {
		return func(num);
	}
}

function zero(func) {
	return create(0, func);
}
function one(func) {
	return create(1, func);
}
function two(func) {
	return create(2, func);
}
function three(func) {
	return create(3, func);
}
function four(func) {
	return create(4, func);
}
function five(func) {
	return create(5, func);
}
function six(func) {
	return create(6, func);
}
function seven(func) {
	return create(7, func);
}
function eight(func) {
	return create(8, func);
}
function nine(func) {
	return create(9, func);
}

function plus(right) {
	return function(left) { return left + right; };
}
function minus(right) {
	return function(left) { return left - right; };
}
function times(right) {
	return function(left) { return left * right; }; 
}
function dividedBy(right) {
	return function(left) { return left / right; };
}

seven(times(five())); //, 35);
//OTHER SOLUTIONS
// CREDIT: OverZealous, mowol, vikashd, andrewp931, liming8519, multi2 (plus 10 more warriors)

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }


// CREDIT: hakanensari, OLEXZ

'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num) 
)

let plus      = (r) => (l) => l + r
let minus     = (r) => (l) => l - r
let times     = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r

// CREDIT: SamTay

function template(n) {
  return function(){
    if (arguments.length > 0) {
      var operation = arguments[0];
      return operation(n);
    }
    return n;
  }
}
var zero = template(0);
var one = template(1);
var two = template(2);
var three = template(3);
var four = template(4); 
var five = template(5);
var six = template(6);
var seven = template(7);
var eight = template(8);
var nine = template(9);

function plus(operand) {
  return function(n){return n+operand;}
}
function minus(operand) {
  return function(n){return n-operand;}
}
function times(operand) {
  return function(n){return n*operand;}
}
function dividedBy(operand) {
  return function(n){return n/operand;}
}
// 6kyu kata completed 030317

function narcissistic( value ) {
  var str = "" + value,
      sum = 0;
  str = str.split('');
  var exp = str.length;
  
  for(var i = 0; i < exp; i++) {
    var num = Math.pow(parseInt(str[i]), exp);
    sum += num;
  }
  return (sum == value);
}
narcissistic(1634);


//TEST CASES
describe( "Narcissistic Function", function() {
  it( "should find small numbers are all narcissistic", function() {
    Test.expect( narcissistic( 7 ), "7 is narcissistic" );
  });
  
  it( "should find these numbers are narcissistic", function() {
    Test.expect( narcissistic( 371 ), "371 is narcissistic" );
  });
});


//OTHER SOLUTIONS

//colbydauph, FunGuy, kenken, testtest123, Fantom1991, 14bce128@nirmauni.ac.in

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

//TimSCi, yusra.shaikh17567

function narcissistic( value ) {
  var remaining = value,
      digits = [],
      solution = 0;
  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  
  return value == digits.reduce(function(p,n) {
    return p + Math.pow(n,digits.length);
  },0);
}


//llaine

function narcissistic( value ) {
  // Code me
  var nbDigit = value.toString().length;
  var stringNb = value.toString();
  var num = 0;
  
  for(var i = 0; i < nbDigit ; ++i)
    num += Math.pow(parseInt(stringNb.charAt(i)), nbDigit); 
    
  return num === value;
  
}


//valdemars

function narcissistic(number) {
    var arrayOfDigitals = number.toString().split(''),
        numberLength = arrayOfDigitals.length,
        sum = 0;

    arrayOfDigitals.forEach(function(digit) {
        sum += Math.pow(digit, numberLength);
    });

    return sum === number;
}
// 5kyu kata completed 021717

// Description:

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  function check(num) {
    if (num < 0) 
      return 0;
    else if (num > 255) 
      return 255;
    else 
      return num;
  }
  r = check(r);
  g = check(g);
  b = check(b);
  var r1 = Math.floor(r/16),
      r2 = r%16,
      g1 = Math.floor(g/16),
      g2 = g%16,
      b1 = Math.floor(b/16),
      b2 = b%16;
      
  function hex(num) {
    if (num < 10 && num >= 0) {
      return num;
    } else {
      var alph = ['A', 'B','C','D','E','F','G'];  
      return alph[(num - 10)];
    } 
  }
  return hex(r1) + '' + hex(r2) + '' + hex(g1) + '' + hex(g2) + '' + hex(b1) + '' + hex(b2); 
}





// OTHER SOLUTIONS
// CREDIT: zhenghu, Adam110, saiful_coder

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
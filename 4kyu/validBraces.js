// 4kyu Kata completed 011117


function validBraces(braces){
  var b = braces.split('');
  var par = 0, cur = 0, squ = 0;
  var parO = false, curO = false, squO = false;
  for (var i = 0; i < b.length; i++) {
    if(b[i] == '(') {
      par++;
      parO = true;
    } else if(b[i] == ")") {
      if(!squO && !curO) {
        par--;
        parO = false;
      } else {
        return false;
      }
    } else if(b[i] == '[') {
      squ++;
      squO = true;
    } else if (b[i] == ']') {
      if(!parO && !curO) {
        squ--;
        squO = false;
      } else {
        return false;
      }
    } else if (b[i] == '{') {
      cur++;
      curO = true;
    } else if (b[i] == '}' ) {
      if(!parO && !curO) {
        cur--;
        curO = false;
      } else {
        return false;
      }
  }
  }
  return (par === 0 && squ === 0 && cur === 0);
}
 validBraces( "[(])" )


 function validBraces(braces){
  //TODO
  var open = [];
  var bracesOpen = ['(','{','['];
  var bracesClose = [')','}',']'];

  for (let i = 0; i < braces.length; i++) {
    let char = braces[i];
    if (bracesOpen.indexOf(char) != -1) {
      open.push(char);
    } else if (bracesClose.indexOf(char) != -1) {
      if (open[open.length - 1] == bracesOpen[bracesClose.indexOf(char)]) {
        open.pop();
      } else {
        return false;
      }
    }
   }

   return (open.length == 0);
}

//TEST CASES
// Test.assertEquals(validBraces( "()" ), true);
// Test.assertEquals(validBraces( "[(])" ), false);
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true

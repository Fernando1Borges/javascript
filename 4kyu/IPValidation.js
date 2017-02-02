// 4kyu kata completed 020217

function isValidIP(str) {
console.log(str);
  if(str.match(/[a-z]/i))
    return false;
  if(str.match(/^[.\s]+|[.\s]+$/g))
    return false;
  var arr = str.split("");
  var arrp = str.split(".");
  var len = arr.length;
  var lenp = arrp.length;
  var answer = false;
    var checkRange = function(num) {
    if(num > 255 || num < 0)
      return false;
    else
      return true;
  }


  if(!(len >= 7 && len <= 15)) {
    return false;
  } if(lenp != 4) {
    return false;
  }
  for (var i = 0; i < lenp; i++) {
    if(!checkRange(arrp[i]))
      return false;
  }

  return true;

}


// Test CAse
isValidIP(" 1.2.3.4");

//Other Solutions
// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }
//
// function isValidIP(str) {
//   return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
// }

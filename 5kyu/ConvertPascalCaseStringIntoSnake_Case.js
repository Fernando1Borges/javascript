// Completed 020717


function toUnderscore(string) {
  string = string + "";
  string = string.split("");
  for (var i = 1; i < string.length; i++) {
      if(!isNaN(Number(string[i]))) {
          continue;

      } else if( string[i].toUpperCase() === string[i]) {
          string[i] = string[i].toLowerCase();
          string.splice(i, 0, "_");
          i++
      }
  }
  string[0] = string[0].toLowerCase();
  return string.join("");
}

// OTHER SOLUTIONS

// var toUnderscore;
//
// toUnderscore = function(string) {
//   return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
// };

// function toUnderscore(string) {
//   return (''+string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
// }

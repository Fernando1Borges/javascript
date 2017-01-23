//6kyu kata completed 012217

function spinWords(str){
  str = str.split(' ');
  for(var i = 0; i < str.length; i++) {
    if(str[i].length >= 5) {
      var word = str[i].split('').reverse();
      str[i] = word.join('');
    }
  }
  return str.join(' ');
}

// Other solution

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

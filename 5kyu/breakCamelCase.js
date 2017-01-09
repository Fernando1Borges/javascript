// completed on 010917
// 5kyu kata
function solution(string) {
    string = string.split('');
    for (var i = 0; i < string.length; i++) {
      if(string[i] == string[i].toUpperCase()) {
        string.splice(i, 0, " ");
        i++;
      }
    }
    return string.join('');
}

// TESTS 

// Test.expect(solution('camelCasing') == 'camel Casing', 'Unexpected result')
// Test.expect(solution('camelCasingTest') == 'camel Casing Test', 'Unexpected result')

// OTHER SOLUTIONS

// complete the function
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
//
// }


// function solution(string){
//   return string.replace(/[A-Z]/g, function(c){return " " + c;});
// }

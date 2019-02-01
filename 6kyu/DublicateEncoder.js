/**
 * 
 * The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * 
 *  Examples:
 * 
 *  "din" => "((("
 * 
 *  "recede" => "()()()"
 * 
 *  "Success" => ")())())"
 * 
 *  "(( @" => "))(("
 * 
 * 
 *  Notes:
 * 
 *  Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).
 */


function duplicateEncode(word){
  const map = {};
  word = word.split('');
  word.forEach(c => {
      c = c.toLowerCase();
      if (map.hasOwnProperty(c)) map[c] += 1;
      else map[c] = 1;
  });
  return word.map((c) => {
      return map[c.toLowerCase()] > 1 ? ')' : '(';
  }).join('');
}
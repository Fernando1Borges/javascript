// 4kyu kata completed 011017

function permutations(str) {
  var results = [];
  str = str.split('');

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        if(results.indexOf(memo.concat(cur).join('')) < 0)
        results.push(memo.concat(cur).join(''));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(str);
}

permutations('aabb');


//, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
// describe('permutations', function() {
//   it('examples from description', function() {
//     Test.assertSimilar(permutations('a'), ['a']);
//     Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
//     Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
//   });
// });


// OTHER SOLUTIONS

// function permutations(string) {
//   if (string.length <= 1) {
//     return [string];
//   }
//   var perms = [];
//   for (var i = 0; i < string.length; i++) {
//     perms = perms.concat(permutations(string.substring(0, i) + string.substring(i + 1)).map(function(e) {
//       return string[i] + e;
//     }).filter(function(e) {
//       return perms.indexOf(e) === -1;
//     }));
//   }
//   return perms;
// }

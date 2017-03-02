// 6kyu kata completed 030217


function inArray(array1,array2){
  var r = [];
  
  for(var i = 0; i < array1.length; i++ ) {
    for(var j = 0; j < array2.length; j++) {
      if(array2[j].indexOf(array1[i]) != -1) {
        r.push(array1[i]);
      }
    }
  }
  
  return r.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}


//TEST CASES

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
Test.assertSimilar(inArray(a1, a2), [])


// OTHER SOLUTIONS
//OverZealous, Meow, MaximillianVoss, ryng2

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}


//st8998, rubbish, Nell

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}


//arnisritins

function inArray(a1, a2) {
  var str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}
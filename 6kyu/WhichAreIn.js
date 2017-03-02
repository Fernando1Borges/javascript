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
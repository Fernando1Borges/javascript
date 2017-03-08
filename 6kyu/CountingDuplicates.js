// 6kyu kata created 030817

unction duplicateCount(text){
  var store = [],
      duplicates = [],
      count = 0;
      
  text = text.split('');
  for (var i = 0; i < text.length; i++) {
    var char = text[i].toLowerCase();
    if(store.indexOf(char) != -1 && duplicates.indexOf(char) == -1) {
      duplicates.push(char);
      count++;
    } else {
      store.push(char);
    }
  }
  return count;
}

//TEST CASES
duplicateCount("aabBcde")
// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)

// Ohter solutions
//jacobb, CASTELONE, nam.nguyen.code, marlenAwwad, NikolaySolodukhin, Esnideco (plus 2 more warriors)

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}



//glalev, ChungGor

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}




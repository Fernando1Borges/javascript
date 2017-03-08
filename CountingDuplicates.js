// 6kyu kata completed 030817


function duplicateCount(text){
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

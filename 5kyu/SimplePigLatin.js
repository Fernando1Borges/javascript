function pigIt(str){
  str = str.split(' ');
  var result = [];

  str.forEach(function(item) {
    item = item.split('');
    item.push(item.shift());
    item.push("ay");
    result.push(item.join(''));
  });
  return result.join(' ');
}

pigIt('Pig latin is cool');


// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')

//Other Solutions
// credit: lloop, FunGuy, johankj, ghubsch, foxi200, Ahntrax (plus 4 more warriors)
//
// function pigIt(str){
//   return str.split(' ').map(function(el){
//     return el.slice(1) + el.slice(0,1) + 'ay';
//   }).join(' ');
// }

//lloop, FunGuy, johankj, ghubsch, foxi200, Ahntrax (plus 4 more warriors)

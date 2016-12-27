// 6kyu Kata
// Completed 12/27/16

function getCard()
{
  var result = [];
  var number;
  for (var i = 0; i < 24; i++) {
    if ( i >= 0 && i < 5) {
      number = "B" + Math.floor((Math.random() * 15) + 1);
      if (result.indexOf(number) < 0)
        result.push(number);
      else {
        number = "B" + Math.floor((Math.random() * 15) + 1);
        result.push(number);
      }
    } else if ( i >= 5 && i < 10) {
      number = "I" + (Math.floor(Math.random() * (31 - 16) + 16));
      if (result.indexOf(number) < 0)
        result.push(number);
      else {
        number = "I" + (Math.floor(Math.random() * (31 - 16) + 16));
        result.push(number);
      }
    } else if ( i >= 10 && i < 14) {
      number = "N" + (Math.floor(Math.random() * (46 - 31) + 31));
      if (result.indexOf(number) < 0)
        result.push(number);
      else {
        number = "N" + (Math.floor(Math.random() * (46 - 31) + 31));
        result.push(number);
      }
    } else if ( i >= 14 && i < 19) {
      number = "G" + (Math.floor(Math.random() * (61 - 46) + 46));
      if (result.indexOf(number) < 0)
        result.push(number);
      else {
        number = "G" + (Math.floor(Math.random() * (61 - 46) + 46));
        result.push(number);
      }
    } else if ( i >= 19 && i < 24) {
      number = "O" + (Math.floor(Math.random() * (76 - 61) + 61));
      if (result.indexOf(number) < 0)
        result.push(number);
      else {
        number = "O" + (Math.floor(Math.random() * (76 - 61) + 61));
        result.push(number);
      }
    }
  }

  return result;
}



// Other Solutions
// Credit: abar
//
// function genRange(arr, letter, start, end, count) {
//   var taken = [];
//   for(var i = 0; i < count; ) {
//     r = Math.floor(Math.random() * (end - start) + start);
//     if(taken.indexOf(r) == -1) {
//       taken.push(r);
//       arr.push(letter + r);
//       i++;
//     }
//   }
// }
// function getCard()
// {
//   var arr = [];
//   genRange(arr, "B", 1, 15, 5);
//   genRange(arr, "I", 16, 30, 5);
//   genRange(arr, "N", 31, 45, 4);
//   genRange(arr, "G", 46, 60, 5);
//   genRange(arr, "O", 61, 75, 5);
//   return arr;
// }

// 5kyu kata completed 021417 
// Description:

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable(seconds) {
  var hr = Math.floor(seconds / 3600);
  var mm = Math.floor((seconds - (hr * 3600))/60);
  var ss = seconds - ((hr * 3600) + (mm * 60));
  return (hr.toString().length == 1 ? ("0"+hr) : hr) + ":" + (mm.toString().length == 1 ? "0"+mm : mm) + ":" + (ss.toString().length == 1 ? "0"+ss : ss);
}


// Other solutions

// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }
// 5kyu kata completed 012717

function score( dice ) {
  console.log(dice);
  var d = dice.slice(0);

  var score = 0, one = [], two = [], three = [], four = [], five = [], six = [];
  for (var i = 0; i < d.length; i++) {
    switch (d[i]) {
      case 1:
        one.push(d[i]);
        break;
      case 2:
        two.push(d[i]);
        break;
      case 3:
        three.push(d[i]);
        break;
      case 4:
        four.push(d[i]);
        break;
      case 5:
        five.push(d[i]);
        break;
      case 6:
        six.push(d[i]);
        break;
    }
  }

  switch (one.length) {
    case 1:
      score += 100;
      break;
    case 2:
      score += 200;
      break;
    case 3:
      score += 1000;
      break;
    case 4:
      score += 1100;
      break;
    case 5:
      score += 1200;
      break;
  }

  if(three.length >= 3)
      score += 300;
  if(four.length >= 3)
      score += 400;
  if(six.length >= 3)
      score += 600;
  if(two.length >= 3)
      score += 200;

  switch (five.length) {
    case 1:
      score += 50;
      break;
    case 2:
      score += 100;
      break;
    case 3:
      score += 500;
      break;
    case 4:
      score += 550;
      break;
    case 3:
      score += 600;
      break;
  }

  return score;
}

//Tests


score( [4, 4, 4, 3, 3] )

//Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );

// Other solutions
//
// function score( dice ) {
//   var six=0, five=0, four=0, three=0, too=0, one=0;
//   var i = 0;
//   while (i < 5) {
//     if (dice[i] == 6) { six++; }
//     if (dice[i] == 5) { five++; }
//     if (dice[i] == 4) { four++; }
//     if (dice[i] == 3) { three++; }
//     if (dice[i] == 2) { too++; }
//     if (dice[i] == 1) { one++; }
//     i++;
//   }
//   var r = 0;
//   if (one > 2) { r += 1000; one -= 3;}
//   if (six > 2) { r += 600; }
//   if (five > 2) { r += 500; five -= 3;}
//   if (four > 2) { r += 400; }
//   if (three > 2) { r += 300; }
//   if (too > 2) { r += 200; }
//   r += one * 100;
//   r += five * 50;
//   return r;
// }

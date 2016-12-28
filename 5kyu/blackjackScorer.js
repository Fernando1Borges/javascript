// 5kyu Kata
// Completed 12/28/16


function scoreHand(cards)
{
  var score = 0;
  for (var i = 0; i < cards.length; i++) {
    console.log(cards);
    switch (cards[i]) {
      case '2':
        score += 2;
        break;
      case '3':
        score += 3;
        break;
      case '4':
        score += 4;
        break;
      case '5':
        score += 5;
        break;
      case '6':
        score += 6;
        break;
      case '7':
        score += 7;
        break;
      case '8':
        score += 8;
        break;
      case '9':
        score += 9;
        break;
      case '10':
        score += 10;
        break;
      case "J":
        score += 10;
        break;
      case "Q":
        score += 10;
        break;
      case "K":
        score += 10;
        break;
      case "A":
        var temp = score;
        (score += 11 > 21 || (score += 11 < 21 && cards.length == 3)) ? score = (temp += 1):score = (temp += 11);
        console.log(score);
        break;
    }
        console.log(score);
  }
  return score;
}

// Test Cases
scoreHand([ 'A', 'J', '7' ]);//18

// scoreHand(["A"]); //=> 11
// scoreHand(["A", "J"]); //=> 21
// scoreHand(["A", "10", "A"]); //=> 12
// scoreHand(["5", "3", "7"]); //=> 15
//scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25


// Other Solutions
// Credit: kobiorhs
//
// function scoreHand(cards){
//   var score = 0;
//   var numAces = 0;
//   for(i=0;i<cards.length;i++){
//     console.log(cards[i]);
//     switch(cards[i]){
//       case 'A':
//       score += 11;
//       numAces++;
//       break;
//       case 'K':
//       case 'Q':
//       case 'J':
//       score += 10;
//       break;
//       default:
//       score += parseInt(cards[i]);
//     }
// }
//    while (numAces > 0 && score > 21){
//    score -= 10;
//    numAces--;
// }
//    return score;
// }

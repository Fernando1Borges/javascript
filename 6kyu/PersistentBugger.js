// 6kyu kata complteted 030417

function persistence(num) {
    var count = 0;
    while(true) {
      num = String(num).split('');      
      if(num.length == 1) {
        return count;
      }
      count++;
      var sum = parseInt(num[0]);
      for(var i = 1; i < num.length; i++) {
        sum *= parseInt(num[i]);
      }
      num = sum;
    }
    return count;
}

// TEST CASES
// describe('Initial Tests', function () {
//   Test.assertEquals(persistence(39),3);
//   Test.assertEquals(persistence(4),0);
//   Test.assertEquals(persistence(25),2);
//   Test.assertEquals(persistence(999),4);
// });

// OTHER SOLUTIONS
//Strato, yusra.shaikh17567, 14bce128@nirmauni.ac.in, dubdjon, Nikking, jskull

function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

//colbydauph, Instigator **

const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

//wilmendes

function persistence(num) {
  var i = 0;
  for(i;num.toString().length>1;i++){
    num = num.toString().split('').reduce(function(x,y){return x*y});
  }
  return i;
}

//function persistence(num) {
    var digits = (""+num).split("")
    var total;
    var sum = 0;
    while (digits.length > 1) {
        digits = eval(digits.join('*'));
        digits = (""+digits).split("");
        sum++
    }
    return sum;
}
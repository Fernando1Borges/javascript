// 6yu kata completed 030717

function createPhoneNumber(numbers){

  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8, 0, "-")
  
  return numbers.join('');

}

// TEST CASES
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// OTHER SOLUTIONS

//Smdumic, mansipathak, FoxJS, kovacsdev, NatasaPeic, DarykLive (plus 18 more warriors)

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

//madstorm, suva, dansindaoc, bl2i4n, gchiriac, molliemac (plus 14 more warriors)

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

//mrkishi, zet23t, michaelO93, HentaiMom, Aleksandr Shirokov

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


//lantto, m_x86, perkee, wtfil, dhaya, qschmick (plus 70 more warriors)

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}
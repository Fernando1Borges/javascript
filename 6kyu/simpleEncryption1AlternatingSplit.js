// 6kyu  kata completed 032717
// Description:

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.


function encrypt(text, n) {
  if (n <= 0 || text == null) {
    return text;
  }
  else {
    var first = text.split('').filter(function(element, index) { return index % 2 == 0; }),
        second = text.split('').filter(function(element, index) { return index % 2 != 0; });
    return encrypt(second.concat(first).join(''), n - 1); 
  }
}

function decrypt(encryptedText, n) {
  if (n <= 0) {
    return encryptedText;
  }
  else {
    var first = encryptedText.split('').splice(0, (encryptedText.length / 2)),
        second = encryptedText.split('').splice(encryptedText.length / 2),
        s = 0, f = 0, result = [];
    for (var i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        result.push(second[s]);
        s++;
      } else {
        result.push(first[f]);
        f++;
      }
    }
    return decrypt(result.join(''), n - 1);
  } 
}


// Other solutions

//ignovak

function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}

//a.morgunov

function encrypt(text, n) {
  if (!text || !text.length || n <= 0)
  {
    return text;
  }

  var res = "";
  var oth = "";

  for (var i = 0; i < text.length; ++i)
  {
    if (i % 2 == 0)
    {
      oth += text[i];
    }
    else
    {
      res += text[i];
    }
  }

  return encrypt(res + oth, --n);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || !encryptedText.length || n <= 0)
  {
    return encryptedText;
  }

  var first = encryptedText.slice(0, encryptedText.length / 2);
  var second = encryptedText.slice(encryptedText.length / 2);
  
  var res = "";
  var i = 0;
  var j = 0;

  while (res.length < encryptedText.length)
  {
    if (res.length % 2 == 0)
    {
      res += second[i];
      i++;
    }
    else
    {
      res += first[j];
      j++;
    }
  }

  return decrypt(res, --n);
}
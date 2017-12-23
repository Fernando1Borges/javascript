function to_dec(input, source) {
  input = String(input);
  input = input.split('');
  var output = 0, pos = 0, num = '', i = input.length - 1, base = source.length;
  for(i; i >= 0; i--) {
    if (input[i] !== '0') {
      if (isNaN(parseInt(input[i]))) {
        output += Math.pow(base, pos) * parseInt(source.indexOf(input[i]));
      } else {
        output += Math.pow(base, pos) * parseInt(input[i]);
      }
    }
    pos++;
  }
  return output;
}

function to_output(dec, target) {
  var output = [], base = target.length;
  if (dec === 0) {
    output.unshift(target.charAt(dec % base));
    return output.join('');
  }
  while (dec > 0) {
    output.unshift(target.charAt(dec % base));
    dec = Math.floor(dec/base);
  }
  return output.join('');
}

function convert(input, source, target) {
  var input_dec, output_dec, output;
  return to_output(to_dec(input, source), target);
}
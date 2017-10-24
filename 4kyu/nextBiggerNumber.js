function nextBigger(n){
  var org = n;
  n = n+'';
  n = n.split('');
  n = n.map(Number);
  var len = n.length;
  var found = false;
  var swapPoint;
  for(var i = len-1; i > 0; i--) {
    if(n[i]>n[i-1]) {
      swapPoint = i-1;
      found = true;
      break;
    }
  }
  if (!found) 
    return -1;
    
  var firstPart = n.slice(0, swapPoint);
  var pivot = n[swapPoint];
  var lastPart = n.slice(swapPoint+1);
  lastPart = sort(lastPart);
  var newTemp = pivot;
  pivot = nextBig(pivot, lastPart);
  lastPart.unshift(newTemp);
  lastPart = sort(lastPart);
  return parseInt(firstPart.join('').concat(pivot).concat(lastPart.join('')));
}

function nextBig(pivot, lastPart) {
  for(var i = 0; i < lastPart.length; i++) {
    if(lastPart[i] > pivot) {
      var res = lastPart[i];
      lastPart.splice(i,1);
      return res;
    }
  }
  return pivot;
}

function sort(arr) {
  var len = arr.length;
  for(var i = 0; i < len; i++) {
    for(var j = i+1; j < len; j++) {
      if(arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
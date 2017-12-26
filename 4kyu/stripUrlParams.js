function stripUrlParams(url, paramsToStrip){
    if(url.indexOf('?')!== -1) {
      var params = url.split('?')[1];
      url = url.split('?')[0];
      if (params.indexOf('&') !== -1) {
        params = params.split('&');
      }
      var i = 0, p = {};
      for (i; i<params.length; i++) {
        var np = params[i].split('=')[0];
        if(p[np] || (paramsToStrip && inParamsToStrip(np, paramsToStrip))) {
          params.splice(i, 1);
          i--;
        } else {
          p[np] = true; 
        }
      }
      return url + '?' + params.join('&');
    }
    return url;
  }
  
  function inParamsToStrip(np, paramsToStrip) {
    var i = 0;
    for(i; i< paramsToStrip.length; i++) {
      if (paramsToStrip[i] === np) {
        return true;
      } 
    }
    return false;
  }
  stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
// 4kyu kata completed 013117

function formatDuration (seconds) {
  var sec = seconds % 60;
  var min = ((seconds % 3600) - sec) / 60;
  var hrs = (Math.floor(seconds / 3600)) % 24;
  var day = Math.floor(seconds / 86400) % 365;
  var yrs = Math.floor(seconds / 31536000);
  var result = "";
  if(!day)
    day = "";
  if(!yrs)
    yrs = "";
  if (hrs !== 0)
    if(hrs == 1)
      hrs = hrs + " hour";
    else
      hrs = hrs + " hours";
  else if(hrs === 0)
      hrs = "";
  if(day !== 0)
    if(day == 1)
      day = day + " day";
    else if (day > 1)
      day = day + " days";
  else
    day = "";
  if (yrs !== 0)
    if(yrs == 1)
      yrs = yrs + " year";
    else if (yrs > 1)
      yrs = yrs + " years";
  else if(yrs === 0)
    yrs = "";
  if (min !== 0)
    if (min == 1)
      min = min + " minute";
    else
      min = min + " minutes";
  else
    min = "";
  if (sec !== 0)
    if(sec == 1)
      sec = sec + " second";
    else
      sec = sec + " seconds";
  else
    sec = "";
  if (!yrs && !day && hrs && min && sec)
    return hrs + ", " + min + " and " + sec;
  else if (!yrs && !day && !hrs && min && sec)
    return min + " and " + sec;
  else if (!yrs && !day && !hrs && !min && sec)
    return sec;
  else if (!yrs && !day && !hrs && min && !sec)
    return min;
  else if (!yrs && !day && hrs && !min && !sec)
    return hrs;
  else if(seconds === 0)
    return "now";
  else if (yrs && day && hrs && min && sec)
    return yrs + ", " + day + ", " + hrs + ", " + min + " and " + sec;
  else if(!yrs && day && hrs && min && sec)
    return day + ", " + hrs + ", " + min + " and " + sec;
  else if(yrs && day && hrs && min && !sec)
    return yrs + ", " + day + ", " + hrs + " and " + min;
}

// Test cases

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");


// Other Solutions
// credit: omgo, suva, summeranimation, dubdjon


function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

/**
 * 
 In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
  // This will NOT happen
  foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
A method has been provided for testing Objects to compare objects recursively without depending on property order:
  assertSimilarObjects(myValue, expectedValue);
Use it just like Test.assertSimilar, it will call the testing framework for you.
 */
function convertQueryToMap(query) {
  query = query.split('&');
  let ansArr = [];

  for(let j = 0; j<query.length; j++) {
    let item = query[j];
    item = item.split('=');
    let value = item[1];
    ansArr.push(buildObject(item[0], value));
  }
  let ansFinal = mergeObjects({}, ...ansArr);
  
  return ansFinal;
}

function buildObject(inputObj, value) {
  let ans = {};
  let inputObjArr = inputObj.split('.');
  let len = inputObjArr.length;
  value = value ? decodeURIComponent(value) : value;
  ans = { [inputObjArr[len-1]]: value}
  for(let i = len-2; i>=0; i--) {
    ans = { [inputObjArr[i]]: ans };
  }

  return ans;
}
function mergeObjects(target) {
  for (let i = 1; i < arguments.length; i++) {
    let from = arguments[i];
    if (typeof from !== 'object') continue;
    for (let j in from) {
      if (from.hasOwnProperty(j)) {
        target[j] = typeof from[j] === 'object'
          ? mergeObjects({}, target[j], from[j])
          : from[j];
      }
    }
  }

  return target;
}




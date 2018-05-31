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

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  query = query.split('&');
  let ansArr = [];

  for(let j = 0; j<query.length; j++) {
    let item = query[j];
    item = item.split('=');
    let value = item[1];
    ansArr.push(buildObject(item[0], value));
  }

  let ansFinal = ansArr[0];
  console.log('ansArr', ansArr);
  for (let i = 1; i < ansArr.length; i++) {
    ansFinal = Object.assign({}, ansFinal, ansArr[i]);
  }
  
  return ansFinal;
}

function buildObject(inputObj, value) {
  let ans = {};
  let inputObjArr = inputObj.split('.');
  let len = inputObjArr.length;
  ans = { [inputObjArr[len-1]]: value}
  for(let i = len-2; i>=0; i--) {
    // let ansCopy = Object.assign({}, ans);
    // ans = { [inputObjArr[i]]: ansCopy };
    ans = { [inputObjArr[i]]: ans };
  }

  return ans;
}


function extend (target) {
    for(var i=1; i<arguments.length; ++i) {
        var from = arguments[i];
        if(typeof from !== 'object') continue;
        for(var j in from) {
            if(from.hasOwnProperty(j)) {
                target[j] = typeof from[j]==='object'
                ? extend({}, target[j], from[j])
                : from[j];
            }
        }
    }
    return target;
}

var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
    out = {
      'user': {
        'name': {
          'firstname': 'Bob',
          'lastname': 'Smith'
        },
        'favoritecolor': 'Light Blue'
      }
    };
console.log(convertQueryToMap(q));//   out);


let obj = 'user.name.firstname',
ans = {},
value = 'Bob';

// console.log(addNewValue(obj, value, ans));



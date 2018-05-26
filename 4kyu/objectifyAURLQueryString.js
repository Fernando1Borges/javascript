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
  let result = {};
  query.map(function (item, index) {
    item = item.split('=');
    let value = item[1];
    result = addNewValue(item[0], item[1], result);
    console.log('item ;', item);
  });
  
  return result;
}

function addNewValue(inputObj, value, result) {
  if (value) {
    inputObj = inputObj.split('.');
    let inputObjCurrent = inputObj[0];
    let currResult = result;
    for(let i = 0; i<inputObj.length; i++) {
      
      if (currResult.hasOwnProperty(inputObj[i])) {
        console.log('has prpty pre = ', currResult, currResult[inputObj[i]], inputObj[i]);
        
        currResult = currResult[inputObj[i]];
        console.log('has prpty post = ', currResult, inputObj[i]);


        continue;
      }
      
      currResult[inputObj[i]] = (i === (inputObj.length-1)) ? value : {};
    }

    result = currResult;      
  }
  console.log('result; ', result);

  return result;
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
console.log(convertQueryToMap(q)); //   out);
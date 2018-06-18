// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0



function countChangeRecursive(money, coins, index) {
  if (money === 0) {
    return 1;
  }
  if (money < 0) {
    return 0;
  }
  if (index <= 0 && money >= 1) {
    return 0;
  }
  return countChangeRecursive(money, coins, index-1) + countChangeRecursive(money - coins[index-1], coins, index);
}

function countChange(money, coins) {
  let index = coins.length;
  return countChangeRecursive(money, coins, index);
}

// OTHER SOLUTIONS

var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}
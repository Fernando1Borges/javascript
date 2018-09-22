/*
 In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

 Examples:

 permutations('a'); // ['a']
 permutations('ab'); // ['ab', 'ba']
 permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 The order of the permutations doesn't matter.
 */

function permutations(string) {
  return permute(string, 0);
}
function permute(str, index, result) {
  result = result || [];
  // base case
  if (index === str.length) {
    result.push(str);
    return result;
  }

  // permute current string without swapping
  // because the for loop starts with index + 1 and swaps
  // and skips over the current case
  result.push(...permute(str, index + 1));
  let lastChar = str[index];

  for (let i = index + 1; i < str.length; i++) {
    // check if the two chars to be swapped are the same
    // this prevents dupliates
    if (lastChar === str[i]) {
      continue;
    } else {
      lastChar = str[i];
    }
    // swap, permute the ending and swap back to original
    str = swap(str, index, i);
    result.push(...permute(str, index+1));
    str = swap(str, index, i);
  }
  return result;
}
function swap(arr, l, r) {
  arr = arr.split('');
  let temp = arr[r];
  arr[r] = arr[l];
  arr.splice(l, 1, temp);
  return arr.join('');
}
// 6kyu kata completed 033017

// Description:

// Given a node object representing a binary tree:

// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// In C++:

// struct node
// {
//   int value;
//   node* left;
//   node* right;
// }
// write a function that returns the sum of all values, including the root.

// Examples:

// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3


function sumTheTreeValues(root){
  if(!root)
    return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}


function sumTheTreeValues(root){
  if(root.left == null && root.right == null) {
    return root.value;
  }
  if(root.left == null) {
    return root.value + sumTheTreeValues(root.right);
  }
  if(root.right == null) {
    return root.value + sumTheTreeValues(root.left);
  }
  return root.value + sumTheTreeValues(root.right) + sumTheTreeValues(root.left);
}

//OTHER SOLUTIONS

//janitormeir, mjstromberg, DMO-NZ, Ravalo

function sumTheTreeValues(root) {
  return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}

//smile67, hobnob

function sumTheTreeValues(root){
  var val=root.value;
  if (root.left!=null) val+=sumTheTreeValues(root.left);
  if (root.right!=null) val+=sumTheTreeValues(root.right);
  return val
}

//jshawl

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
  // your code here
  var left = 0
  if(root.left){
    left = sumTheTreeValues(root.left)
  }
  var right = 0
  if(root.right){
    right = sumTheTreeValues(root.right)
  }
  return left + right + root.value
  
}


//phatcabbage, krikus, WizzardOfOZ8, shamsup, mlipilin, perumalcsbe (plus 9 more warriors)

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root) {
  if(!root) return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
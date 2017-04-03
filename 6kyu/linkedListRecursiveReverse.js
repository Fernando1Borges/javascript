// 6kyu kata completed 040117
// Linked Lists - Recursive Reverse

// Write a Recursive Reverse() function that recursively reverses a linked list. You may want to use a nested function for the recursive calls.

// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(curr, prev) {
  console.log(curr);
  if(curr == null) {
    return null;
  }
  if(curr.next == null) {
    head = curr;
    curr.next = prev;
    return null;
  }
  
  var next1 = curr.next;
  curr.next = prev;
  reverse(next1, curr);
  return head === undefined ? null : head;
}
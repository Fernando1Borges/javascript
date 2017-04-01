// 6kyu kata completed 040117
// Linked Lists - Recursive Reverse

// Write a Recursive Reverse() function that recursively reverses a linked list. You may want to use a nested function for the recursive calls.

// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.prevNode = null;
  this.next = null;
}

function reverse(head, prev) {
  if(head == null) {
    return null;
  }
  if(prev == null) {
    head.prevNode = null;
  }
  if(head.next === null) {
    head.next = prev;
    return "null";
  } 
//   head.prevNode = head;
  reverse(head.next, head);
  head.prevNode = head.next;
  head.next =  null;
  return head.data + " -> ";
}
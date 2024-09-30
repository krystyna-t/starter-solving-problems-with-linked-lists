const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
  // if(!list.head){
  //     return list;
  // }
  // let prev = null;
  // let current = list.head;
  // while(current.next){
  //     let tmp = current.next;
  //     current.next = prev;
  //     prev = current;
  //     current = tmp;
  // }
  // list.head = current;
  // return list;
  const reversedList = new LinkedList();
  let node = list.head;
  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
  if (list.length <= 1) {
    return list;
  }
  const head = list.head.value;
  list.remove((node, index) => index === 0);
  const reversedList = reverseRecursive(list);
  reversedList.insert(head);
  return reversedList;
}

module.exports = { reverseIterative, reverseRecursive };

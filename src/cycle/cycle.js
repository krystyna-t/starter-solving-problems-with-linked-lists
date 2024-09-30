// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). 

const cycle = (list) => {
    if (!list || !list.head) {
      return false;  // Empty list or no list, so no cycle
    }

    let slow = list.head;
    let fast = list.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;        // Move slow pointer by one step
      fast = fast.next.next;   // Move fast pointer by two steps

      if (slow === fast) {
        return true;  // Cycle detected
      }
    }

  return false;  // Reached the end of the list, no cycle
};

module.exports = cycle;

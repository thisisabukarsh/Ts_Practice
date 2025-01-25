//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//helper function to create a list node
const createList = (values: number[]): ListNode | null => {
  if (values.length === 0) return null;
  const dummeyHead = new ListNode(0);
  let current = dummeyHead;
  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummeyHead.next;
};

//function to print the list
const printList = (List: ListNode | null): void => {
  if (List === null) return console.log("List is null");
  let arr: number[] = [];
  while (List != null) {
    arr.push(List.val);
    List = List.next;
  }
  console.log(arr.join(" -> "));
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l = new ListNode(0);
  let current = l;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const val1 = l1 ? l1.val : 0; // Use 0 if l1 is null
    const val2 = l2 ? l2.val : 0; // Use 0 if l2 is null
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10); // Extract carry (e.g., 15 -> carry = 1)
    const digit = sum % 10; // Extract current digit (e.g., 15 -> digit = 5)

    current.next = new ListNode(digit); // Add the digit to the result list
    current = current.next;

    // Move to the next nodes in l1 and l2 (if available)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return l.next; // Return the list starting from the first real node
}

// Test the function with the given examples

const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465

const l3 = new ListNode(0);
const l4 = new ListNode(0);

const l5 = createList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createList([9, 9, 9, 9]);

printList(addTwoNumbers(l1, l2)); // 8 -> 0 -> 8
printList(addTwoNumbers(l3, l4)); // 8 -> 0 -> 8
printList(addTwoNumbers(l5, l6)); // 8 -> 0 -> 8

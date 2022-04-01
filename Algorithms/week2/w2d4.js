// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

var x = new ListNode(7);

var y = new ListNode(4);
x.next = y;

var z = new ListNode(13);
y.next = z;

console.log(x.next.next.value);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {

        var new_node = new ListNode(value);

        if(this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }

    }
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {

        var new_node = new ListNode(value);

        if (this.tail == null) {
            this.head = new_node;
            this.tail = new_node; 
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }

    }
    // contains - returns true if target value is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {

        var output = '';
        var runner = this.head;

        while (runner != null) {
            if (runner == this.tail) {
                var output = output + runner.value;
                return output;
            }
            var output = output + runner.value + ' - '
            runner = runner.next;
        }
    }
// prependValue(value, target)
    // create a new node with the given value and insert it into the list
    // before the *first* node containing target. if no node with target exists in
    // the list, place the new node at the tail.
    // if value is 5 and target is 9, and the list consists of:
    // 1 - 4 - 3 - 7 - 9 - 1
    // the result should be
    // 1 - 4 - 3 - 7 - 5 - 9 - 1
    // if the target was instead 0, the result would be
    // 1 - 4 - 3 - 7 - 9 - 1 - 5
    // if value is 9 and target is 2, and the list consists of:
    // 3 - 2 - 5 - 2 - 7 - 2 - 9 - 2
    // the result should be:
    // 3 - 9 - 2 - 5 - 2 - 7 - 2 - 9 - 2
    // particular edge case: if list is empty, new node becomes head and tail
    // if target is first value in list, new node becomes head
    prependValue(value, target) {

}







// prependValue(value, target)
    // create a new node with the given value and insert it into the list
    // before the *first* node containing target. if no node with target exists in
    // the list, place the new node at the tail.
    // if value is 5 and target is 9, and the list consists of:
    // 1 - 4 - 3 - 7 - 9 - 1
    // the result should be
    // 1 - 4 - 3 - 7 - 5 - 9 - 1
    // if the target was instead 0, the result would be
    // 1 - 4 - 3 - 7 - 9 - 1 - 5
    // if value is 9 and target is 2, and the list consists of:
    // 3 - 2 - 5 - 2 - 7 - 2 - 9 - 2
    // the result should be:
    // 3 - 9 - 2 - 5 - 2 - 7 - 2 - 9 - 2
    // particular edge case: if list is empty, new node becomes head and tail
    // if target is first value in list, new node becomes head
    prependValue(value, target) {

    }

    // appendValue(value, target)
    // as above, but insert the node with the given value after the target,
    // not before.
    // if value is 6 and target is 7, and the list consists of:
    // 1 - 4 - 3 - 7 - 5 - 9 - 1
    // the result should be
    // 1 - 4 - 3 - 7 - 6 - 5 - 9 - 1
    // particular edge case: if list is empty, new node becomes head and tail
    // if target is last value in list, new node becomes tail
    appendValue(value, target) {

    }
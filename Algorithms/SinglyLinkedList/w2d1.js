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


// removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????
    removeFront() {

        if (this.head == null) {
            return undefined;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;

    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?
    removeBack() {

        if (this.head == null) {
            return undefined;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var runner = this.head;
        while (runner.next != this.tail) {
            runner = runner.next;
        }
        var temp = this.tail;
        this.tail = runner;
        this.tail.next = null;
        return temp.value;

    }

    // moveMaxToBack() - as above, but the node with the largest value becomes
    // the tail. as before, this probably makes the most sense to split into
    // two tasks - find the node to move, then move it
    // if your list looks like:
    // 2 - 8 - 5 - 7 - 22 - 21 - 9
    // it should become:
    // 2 - 8 - 5 - 7 - 21 - 9 - 22
    moveMaxToBack() {
        

}

// bonus: write a function to help us test linked list-related methods
// generateNewList(length, min_value, max_value)
// return a new linked list with length number of nodes, where each node's
// value is at least min_value and at most max_value

function generateNewList(length, min_value, max_value) {
    var new_sll = new SinglyLinkedList();
    for (var i = 0; i < length; i++){
        new_sll.addToFront(Math.floor(Math.random()* max_value) + min_value)
    }
    return new_sll
}

var new_sll = generateNewList(6, 1, 20);
console.log(new_sll.display());
console.log(new_sll.removeFront());
console.log(new_sll.removeBack());
console.log(new_sll.display());
console.log(new_sll.removeFront());
console.log(new_sll.removeBack());
console.log(new_sll.display());
console.log(new_sll.removeFront());
console.log(new_sll.removeBack());
console.log(new_sll.display());
console.log(new_sll.removeFront());
console.log(new_sll.removeBack());





var new_sll = new SinglyLinkedList();
new_sll.addToFront(7);
new_sll.addToFront(11);
new_sll.addToBack(3);
new_sll.addToBack(9);

console.log(new_sll.display());

new_sll.addToFront(12);
new_sll.addToBack(7);
new_sll.addToFront(21);

console.log(new_sll.display());


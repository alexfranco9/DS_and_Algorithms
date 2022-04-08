// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {

        var new_node = new ListNode(value);

        if (this.head == null) {
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

        if (this.head == null) {
            return 'empty';
        }

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

    // moveMinToFront() - find the node with the smallest value in the linked
    // list, then make that node the head - do this by swapping nodes, not
    // just their values! if you find multiple nodes with the value tied for
    // "smallest", it doesn't matter which you move - probably makes the most
    // sense to just do the first one you find, though
    // if your list looks like:
    // 8 - 5 - 7 - 2 - 22 - 21 - 9
    // it should become:
    // 2 - 8 - 5 - 7 - 22 - 21 - 9
    // note: in addition to not just swapping values, do not create
    // any new nodes
    // you probably want to break this into multiple steps - find the node
    // with the smallest value, then move it to the head of the list
    // what are the edge cases?
    // - if list is empty
    // - if the list has one item
    // - if the list has two items??? (maybe?) 
    // - if the node at the head already has the smallest value
    moveMinToFront() {

        if (this.head == null || this.head == this.tail) {
            return null;
        }

        var runner = this.head;
        var min = this.head;
        while (runner != null) {
            if (runner.value < min.value) {
                min = runner
            }
            runner = runner.next
        }

        if (this.head == min) {
            return null;
        }


        console.log(min.value);
        // We will now move the node to the front
        runner = this.head;
        while (runner.next != min)  {
            runner = runner.next;
        }
        if (this.tail == min) {
            runner.next = null;
            this.tail = runner;
            min.next = this.head;
            this.head = min;
        }
        else {
            runner.next = min.next;
            min.next = this.head;
            this.head = min;
        }
        // Some magic happened
    }

    // moveMaxToBack() - as above, but the node with the largest value becomes
    // the tail. as before, this probably makes the most sense to split into
    // two tasks - find the node to move, then move it
    // if your list looks like:
    // 2 - 8 - 5 - 7 - 22 - 21 - 9
    // it should become:
    // 2 - 8 - 5 - 7 - 21 - 9 - 22
    moveMaxToBack(){
        if (this.head == this.tail || this.head == null){
            return this.head
        }
        var runner = this.head
        var max = runner
        while (runner != null){
            if (runner.value > max.value){
                max = runner
            }
            runner = runner.next
        }
        //now move the node
        if (this.head == max) {
            this.head = max.next
            this.tail.next = max
            this.tail = max
            return max
        }
        else if (this.tail == max) {
            return max
        }
        var runner = this.head
        while (runner.next != max){
            runner = runner.next
        }
        runner.next = max.next
        this.tail.next = max
        this.tail = max
        return max
    }
    // bonus - if we're clever clever *clever*, we could make each one of these
    // methods...
    // ...
    // ... *two* lines long. how? how could this be?!? what darque scyence
    // would permit for such efficiency of code?! what terrible enchanment must
    // be woven? what is the price a man must pay for etc. etc.
    // ... okay it's not that advanced I just want some high drama in the day.
    // you don't have to actually do it, I just want ideas
    maxToBackAdvanced() {
        var node = this.findMaxNode();
        this.moveToBack(node);
    }
}

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

var new_sll = generateNewList(10, 1, 20);
// new_sll.addToBack(-10);
console.log(new_sll.display());
new_sll.moveMaxToBack();
console.log(new_sll.display());
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
    // list, then make that node the head
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
    // the tail
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
        var runner = this.head
        
        if (this.head == null && this.tail == null){
            this.addToFront(value)
            return null
        }
        else if (this.head.value == target){
            // new_node.next = this.head
            // this.head = new_node
            this.addToFront(value);
            return null
        }

        while (runner.next != null){
            if (runner.next.value == target){
                var new_node = new ListNode(value)
                new_node.next = runner.next
                runner.next = new_node
                return null
            }
            runner = runner.next
        }
        // this.tail.next = new_node
        // this.tail = new_node
        this.addToBack(value);
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
        var runner = this.head
        var new_node = new ListNode(value)
        if (this.head == null && this.tail == null){
            this.addToFront(value)
            return null
        }
        // this actually causes problems if target is present multiple times
        // else if (this.tail.value == target){
        //     console.log('target is final node');
        //     this.tail.next = new_node
        //     this.tail = new_node
        //     return null
        // }
        while (runner.next != null){
            if (runner.value == target){
                new_node.next = runner.next
                runner.next = new_node
                return null
            }
            runner = runner.next
        }
        this.addToBack(value);
    }

    // partition(target)
    // rearrange the nodes in the list so that all nodes with values less than
    // the target value come first in the list, then all nodes with the target
    // value, then all nodes with values greater than the target value
    // if there are no nodes with values greater or less than the target value,
    // or no nodes with the target value at all, the function should still work
    // if the target is 5, and the list is 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3
    // the list should rearrange so that the nodes (represented by values)
    // are in this order:
    // 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8
    // 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3 (the original list, for easy comparison)
    // if the target 5, and the list contains:
    // 8 - 1 - 7 - 2 - 4 - 9 - 0 - 1 - 3 - 8
    // the output should be:
    // 1 - 2 - 4 - 0 - 1 - 3 - 8 - 7 - 9 - 8
    // order of nodes does not matter as long as the above rules 
    // for placement are respected
    // remember to fix your head and tail afterwards
    // bonus: can you do it without using an array?
    // other bonus: can you do it without using an array -and- without using
    // another instance(s) of SinglyLinkedList?

    partition(target) {
        var runner = this.head;
        var lessThanArray = [];
        var greaterThanArray = [];
        var targetArray = [];
        while (runner != null) {
            if (runner.value < target) {
                lessThanArray.push(runner);
            }
            else if (runner.value > target) {
                greaterThanArray.push(runner);
            }
            else if (runner.value == target) {
                targetArray.push(runner)
            }
            runner = runner.next
        }
        var results = lessThanArray.concat(targetArray, greaterThanArray)
        for (var i = 0; i < results.length; i++) {
            results[i].next = results[i+1]
        }
        this.head = results[0]
        this.tail = results[results.length-1]
        this.tail.next = null
    }

    partitionX(target) {

        if (this.head == this.tail || this.head == null) {
            return null;
        }

        var lowerHead = null;
        var lowerTail = null;
        var middleHead = null;
        var middleTail = null;
        var upperHead = null;
        var upperTail = null;

        var runner = this.head;

        while (runner != null) {
            var temp = runner;
            runner = runner.next;

            temp.next = null;

            if (temp.value < target) {
                if (lowerHead == null) {
                    lowerHead = temp;
                    lowerTail = temp;
                }

                else {
                    lowerTail.next = temp;
                    lowerTail = temp;
                }
            }

            else if (temp.value == target) {
                if (middleHead == null) {
                    middleHead = temp;
                    middleTail = temp;
                }

                else {
                    middleTail.next = temp;
                    middleTail = temp;
                }
            }

            else if (temp.value > target) {
                if (upperHead == null) {
                    upperHead = temp;
                    upperTail = temp;
                }

                else {
                    upperTail.next = temp;
                    upperTail = temp;
                }
            }
        }
        // if only nodes greater than the target are found
        if (lowerHead == null && middleHead == null) {
            this.head = upperHead;
            this.tail = upperTail;
            return null;
        }
        // if only nodes less than the target are found
        if (middleHead == null && upperHead == null) {
            this.head = lowerHead;
            this.tail = lowerTail;
            return null;
        }

        //if only nodes with target value are found
        if (lowerHead == null && upperHead == null) {
            this.head = middleHead;
            this.tail = middleTail;
            return null;
        }

        // if no nodes less than target are found
        if (lowerHead == null) {
            this.head = middleHead;
            this.tail = upperTail;
            middleTail.next = upperHead;
            return null
        }

        // if no nodes with target are found
        if (middleHead == null) {
            this.head = lowerHead;
            this.tail = upperTail;
            lowerTail.next = upperHead;
            return null;
        }

        // if no nodes great than target are found
        if (upperHead == null) {
            this.head = lowerHead;
            this.tail = middleTail;
            lowerTail.next = middleHead;
            return null;
        }

        //final case - all three linked lists have some kind of data
        this.head = lowerHead;
        this.tail = upperTail;
        lowerTail.next = middleHead;
        middleTail.next = upperHead;
        return null;
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

function generateSLLFromArray(input) {
    var new_sll = new SinglyLinkedList();
    for (var i = 0; i < input.length; i++){
        new_sll.addToBack(input[i])
    }
    return new_sll;
}

// var new_sll = generateNewList(10, 1, 10);
var new_sll = generateSLLFromArray([1, 2, 3, 5, 20, 6, 9, 20, 7, 11, 20, 9, 20, 7, 4, 20]);
var new_sll_x = generateSLLFromArray([1, 2, 3, 5, 20, 6, 9, 20, 7, 11, 20, 9, 20, 7, 4, 20]);
console.log(new_sll.display());
new_sll.partition(7);
console.log(new_sll.display());
console.log(new_sll_x.display());
new_sll_x.partitionX(7);
console.log(new_sll_x.display());

// var new_sll = new SinglyLinkedList()
// console.log(new_sll.display());
// new_sll.prependValue(11, 5);
// console.log(new_sll.display());
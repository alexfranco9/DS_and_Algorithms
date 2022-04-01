class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the "top" of our stack here?

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // push(value) - adds the given value to the stack
    push(value) {
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
    // pop() - removes the top value from stack and returns it
    pop() {
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

    // top() - returns the top value without removing it
    top() {
        if (this.head == null) {
            return undefined;
        }
        return this.head.value
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if (this.head == null) {
            return undefined;
        }
        var runner = this.head
        while (runner != null){
            if (runner.value == target){
                return true
            }
            runner = runner.next
        }
        return false
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.head != null){
            return true
        }
        else{
            return false
        }
    }

    // size() - returns the size of the stack
    // bonus - this can be done in one line, if you have Wisdom
    // can you wring enough Wisdom out of your brain to make it so?
    // note - you may have to change some other code
    size() {
        if (this.head == null) {
            return undefined;
        }
        var runner = this.head;
        var counter = 0
        while (runner != null) {
            counter++
            runner = runner.next
        }
        return counter
    }
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
}

var x = new SLLStack();
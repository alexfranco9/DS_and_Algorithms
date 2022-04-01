class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from
// add to tail and remove from head

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
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
    
    // dequeue() - removes the top value from queue and returns it
    dequeue() {
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

    // front() - returns the top value without removing it
    front() {
        return this.head.value

    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
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

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.head != null){
            return true
        }
        else{
            return false
        }

    }

    // size() - returns the size of the queue
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

    // method: compareQueues (odd-numbered group)
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    compareQueues(queue2) {

    }
}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue

function compareQueues(queue1, queue2) {
    var runner = queue1.head
    var runnerTwo = queue2.head
    if (queue1.size() == queue2.size()) {

        while (runner != null){
            if (runner.value === runnerTwo.value){
                runner = runner.next
                runnerTwo = runnerTwo.next
            }
            else {
                return false
            }
        }
        return true
    }
    else {
        return false
    }

}

function generateNewList(length, min_value, max_value) {
    var new_sll = new SLLQueue();
    for (var i = 0; i < length; i++){
        new_sll.enqueue(Math.floor(Math.random()* max_value) + min_value)
    }
    return new_sll
}
var new_sll = generateNewList(10,2,20)
var new_slltwo = generateNewList(10,2,20)
console.log(compareQueues(new_sll, new_slltwo))

var queue_a = new SLLQueue();
queue_a.enqueue(7);
queue_a.enqueue(5);
queue_a.enqueue(3);
var queue_b = new SLLQueue();
queue_b.enqueue(7);
queue_b.enqueue(5);
queue_b.enqueue(3);

console.log(compareQueues(queue_a, queue_b))
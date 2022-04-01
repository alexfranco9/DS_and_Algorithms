// HEAP ALGOs -- min heap

class MinHeap {
    constructor() {
        // Initialize an array with null at idx 0
        this.heap = [null]
    }

    size() {
        // This returns the size of my array, but it should NOT count null as part of its size
        return this.heap.length - 1;
    }

    top() {
        // If the heap is greater than 1 in length then a value exists, otherwise, return null
        return this.heap.length > 1 ? this.heap[1] : null;
    }

    print() {
        // Just a basic print
        console.log(this.heap);
    }
    insert(node) {
        this.heap.push(node);
        let current = this.heap.length - 1;
        while (this.heap[current] < this.heap[Math.floor(current / 2)]) {
            console.log(`We are swapping child: ${this.heap[current]} and parent: ${this.heap[current / 2]}`);
            [this.heap[current], this.heap[Math.floor(current / 2)]] = [this.heap[Math.floor(current / 2)], this.heap[current]]
            current = Math.floor(current / 2);
            console.log(this.heap[current]);
        }
    }
}

const myHeap = new MinHeap();

myHeap.print();
console.log(myHeap.size());
console.log(myHeap.top());
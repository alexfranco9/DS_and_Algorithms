class ArrayStack {
    constructor() {
        this.contents = [];
    }
    // push(value) - adds the given value to the stack
    push(value) {
        this.contents.push(value);
    }

    // pop() - removes the top value from stack and returns it
    // (what to do if it's empty?)
    pop() {
        return this.contents.pop();
    }


    // top() - returns the top value without removing it
    top() {
        return this.contents[this.contents.length - 1]
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        for (var i = 0; i < this.contents.length; i++) {
            if (this.contents[i] == target) { 
                return true;
            }
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.contents.length < 1) { 
            return true 
        }
        else {
            return false;
        }
    }

    // another way to 

    // return this.contents.length == 0

    // 
    // size() - returns the size of the stack
    size() {
        return this.contents.length
    }

}

// Testing the functions //


class BNode {
    constructor(val) {
        this.val = val;
        this.left = null;// <
        this.right = null;// >=
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        //if root is null, make new node as the root
        if (this.root === null) {
            this.root = new BNode(val);
            return;
        }

        //make a runner
        let runner = this.root;

        //loop until
        while (runner !== null) {
            if (val < runner.val) {
                //left branch
                if (runner.left === null) {
                    runner.left = new BNode(val);
                    return;
                }
                else {
                    //keep moving runner
                    runner = runner.left;
                }
            }
            else if (runner.val === val) {
                return;
            }
            else {
                //right branch
                if (runner.right === null) {
                    runner.right = new BNode(val);
                    return;
                }
                else {
                    //keep moving runner
                    runner = runner.right;
                }
            }
            //keep going down until the left/right(depends) is null
            //when you reach that condition, add a new node there
        }
    }

    max() {
        let runner = this.root;
        while (runner.right !== null) {
            runner = runner.right;
        }
        return runner.val;
    }

    min() {
        let runner = this.root;
        while (runner.left !== null) {
            runner = runner.left;
        }
        return runner.val;
    }

    //return true if the tree contains the given value
    //return false if the value is not in the tree
    //hint: recursion is a good approach!!!
    contains(val) {
        let runner = this.root

        while (runner !== null) {
            if (runner.val == val) {
                return true
            }
            else if (val > ruuner.val) {
                runner = runner.right
            }
            else {
                runner = runner.left
            }
        }
        return false
    }

    //return the count of nodes in the tree
    size() {
        let count = 0;
        let sizeCount = (currentNode) => {
            if (currentNode == null) return;
            count++;
            sizeCount(currentNode.left);
            sizeCount(currentNode.right);
        }
        sizeCount(this.root)
        return count;
    }

    // size(){
    //     const helperFunc = (root) => {
    //         if(root === null) return 0;
    //         else if(root.left === null && root.right === null) return 1;
    //         return helperFunc(root.left) + helperFunc(root.right) + 1;
    //     }
    //     return helperFunc(this.root);
    // }

    //find and return the longest sequence of nodes from
    //root to the bottom
    //ex: for the tree inputs 15,16,42,8,23,4,
    //the height would be 4
    /*
            15
           /  \
          8    16
         /       \
        4         42
                 /
                23
    */
    height() {
        var nodeCount = 0;
        var maxCount = 0;
        const count = (currentNode) => {
            if (currentNode == null) return;
            nodeCount++;
            if (currentNode.left == null && currentNode.right == null) {
                if (nodeCount > maxCount) {
                    maxCount = nodeCount;
                    nodeCount--;
                }
                else {
                    nodeCount--;
                }
                return;
            }
            count(currentNode.left);
            count(currentNode.right);
            nodeCount--;
        }
        count(this.root)
        return maxCount;
    }

    remove(val) {
        //Three possible scenarios
        // A, the value is the last in the tree (easy)
        // B, the value has one child (medium)
        // C, the value has two children (hard)
        if (this.isEmpty()) {
            console.log("Tree is empty, can't remove");
            return this;
        }
        let runner = this.root;
        let prev = null;
        // We need to find the value
        while (runner) {
            if (runner.value == value) {
                console.log("Found it! Removing now");
                console.log(`Previous value: ${prev ? prev.value : "null"}`);
                // Option A
                if (!runner.right && !runner.left) {
                    // Need to break the prior connection
                    if (prev) {
                        if (prev.left.value == value) {
                            prev.left = null;
                        } else {
                            prev.right = null;
                        }
                    } else {
                        // This was the first value, so it's the root, remove the root
                        this.root = null;
                    }
                }
                // Option B-1
                else if (runner.right && !runner.left) {
                    console.log("Value had one child to the right");
                    if (prev.left.value == value) {
                        prev.left = runner.right;
                    } else {
                        prev.right = runner.right;
                    }
                }
                // Option B-2
                else if (!runner.right && runner.left) {
                    console.log("Value had one child to the left");
                    if (prev.left.value == value) {
                        prev.left = runner.left;
                    } else {
                        prev.right = runner.left;
                    }
                }
                // Option C
                // If it has 2 children, the easiest thing to do is go left once then as right as possible to find the smallest large number, swap, then drop off that end number - also works to go one right then as far left as possible
                // Obviously, would be an issue if there were more differences than just the value, but that's code for another day
                else {
                    prev = runner;
                    let newRunner = runner.left;
                    // If there is no right to go to, this messes up, so gotta check, changes what gets set to null from prev
                    if (newRunner.right) {
                        while (newRunner.right) {
                            prev = newRunner;
                            newRunner = newRunner.right;
                        }
                        runner.value = newRunner.value;
                        prev.right = null;
                    } else {
                        runner.value = newRunner.value;
                        prev.left = null;
                    }
                    console.log("Two children, removed by swapping the next largest number");
                }
                return this;
            } else if (runner.value < value) {
                prev = runner;
                runner = runner.right;
            } else {
                prev = runner;
                runner = runner.left;
            }
        }
        console.log("The value was not in the tree, can't remove");
        return this;
    }


    printMe() {
        const internalPrint = (currentNode) => {
            if (currentNode === null) return;
            console.log(currentNode.val);
            internalPrint(currentNode.left);
            internalPrint(currentNode.right);
        }
        internalPrint(this.root);
    }
}

let myBST = new BST();
myBST.add(15);
myBST.add(8);
myBST.add(4);
myBST.add(-30);
myBST.add(160);
myBST.add(8);
myBST.add(23);
myBST.add(42);
// myBST.printMe();
// console.log(`min is ${myBST.min()} and max is ${myBST.max()}`);
// const search = 6;
// console.log(`looking for value ${search}: ${myBST.contains(search)}`);
console.log(myBST.height());
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.child = null;
    }
}
//singly linked list
//add to front, add to back, display/contains
class SLL{
    constructor(){
        this.head = null;
        this.counter = 0;
    }

    addToFront(val){
        //make a new node
        //set the next value of the node to current head
        //set the head to the new node
        this.counter++
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //create a method to reverse the order of the SLL
    //1->2->3->4->5-> should be 5->4->3->2->1->
    //for extra challenge, do this without creating a new SLL
    reverse(){
        let newList = new SLL();
        let runner = this.head;
        while(runner !== null){
            newList.addToFront(runner.val);
            runner = runner.next;
        }
        this.head = newList.head;
    }

    printMeWithChildren(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val}`;
            if(runner.child){
                returnStr += "(";
                let runner2 = runner.child.head;
                while(runner2 !== null){
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren(){
        
        let runner = this.head;

        while(runner !== null){
            let numChildren = Math.floor(Math.random() * 5);
            if(numChildren !== 0){
                let childList = new SLL();
                for(let i = 0; i < numChildren; ++i){
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    /*
        For this method(and this list), each node has .next, but also
        .child that is either null or points to another SLL. In turn,
        each child node could point to another list. Don't alter .child;
        arrange .next pointers to "flatten" the hierarchy into one linear
        list, from head through all others via .next
    */
    flattenChildren(){
        let runner = this.head;
        while(runner !== null){
            // console.log(runner.val);
            //if runner has a child
            if(runner.child){
                // console.log("found child!")
                let oldNext = runner.next;
                runner.next = runner.child.head;

                //find last child
                let childRunner =  runner.next;
                while(childRunner.next !== null){
                    childRunner = childRunner.next;

                }
                childRunner.next = oldNext;
                runner.child = null;
            }
            runner = runner.next;
        }
    }

     //this is BROKEN!!! but its brokenness will help us test our algo today
    addToBack(val){
        this.counter++
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = new Node(val);
        //this line below is the broken part but leave it for testing
        runner.next.next = this.head;
    }

    //will return true if the list is a circle, false if it ends
    //you are allowed to change the SLL class, the node class,
    //whatever you see fit in order to make this happen
    hasLoop(){
        let runner = this.head;
        let runningCount = 0;
        while (runner.next != null){
            runner = runner.next
            runningCount++
            if (runningCount > this.counter)
                return true
        }
        return false
    }

    //this function should find where the loop connects and break it
    //so that it functions as a normal SLL
    breakLoop(){
        let runner = this.head;
        let runningCount = 0;
        while (runner != null){
            runningCount++
            if (runningCount == this.counter && runner.next != null){
                runner.next = null
            }
        runner = runner.next   
        }     
    }
            

    printN(n){
        let returnStr = '';
        let runner = this.head;
        for(let i = 0; i < n; ++i){
            if(runner === null) return returnStr;
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

mySLL = new SLL();
mySLL.addToFront(1);
mySLL.addToFront(5);
mySLL.addToFront(3);
mySLL.addToFront(4);
mySLL.addToFront(5);
console.log(mySLL.hasLoop());
mySLL.addToBack(0);
console.log(mySLL.hasLoop());
mySLL.printN(20);
console.log(mySLL.counter);
console.log(mySLL.breakLoop());
mySLL.printMe();

// mySLL = new SLL();
// mySLL.addToFront(1);
// mySLL.addToFront(2);
// mySLL.addToFront(3);
// mySLL.addToFront(4);
// mySLL.addToFront(5);
// mySLL.printMe();
// mySLL.reverse();
// mySLL.printMe();
// mySLL.populateChildren();
// mySLL.printMeWithChildren();
// mySLL.flattenChildren();
// mySLL.printMeWithChildren();
// mySLL.printMe();
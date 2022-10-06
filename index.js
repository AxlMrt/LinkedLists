class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedLists {
    constructor(head = null){
        this.head = head;
    }

    append(value){
        const newNode = new Node(value);
        
        if(this.head == null){
            return this.head = new Node(value);
        }

        newNode.next = null;

        let last = this.head;
        while(last.next !== null){   
            last = last.next;
        }

        return last.next = newNode;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    size(){
        let count = 0;
        let node = this.head;
        while (node){
            count += 1;
            node = node.next;
        }
        return count;
    }

    nodeHead(){     
        return this.head;
    }

    tail(){
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    at(index){
        let currentNode = this.head

        let count = 0;
        while(currentNode !== null){
            if(count == index){
                return currentNode.value
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    removeAt(index){
        //If linklist is empty
        if(this.head == null){
            return;
        }

        //store head node
        let temp = this.head;

        //If head needs to be removed
        if(index == 0){
            //change head
            this.head = temp.next;
            return;
        }

        //Find previous node of the node to be deleted
        for (let i = 0; temp != null && i < index - 1; i++){
            temp = temp.next
        }

        //If index is more than number of nodes
        if(temp == null || temp.next == null){
            return;
        }

        //Node temp => next is the node to be deleted
        //Store pointer to the next node of node to be deleted
        let next = temp.next.next;
        temp.next = next;
    }

    /* insertAt(value, index){
        //check if given node is null
        if(index == null){
            return 'The given previous node cannot be null';
        }

        let newNode = new Node(value);

        // Allocate the node and put it in data
        newNode.next = index.next;

        index.next = newNode;
    } */
} 

node1 = new Node(2);
node2 = new Node(18);
node3 = new Node(12);
node1.next = node2;
node2.next = node3;

let list = new LinkedLists(node1);

list.append(7);
list.prepend(12);

console.log(list.size());
console.log(list.nodeHead());
console.log(list.tail());

console.log(list.nodeHead());
console.log(list.tail());
console.log(list.at(2))
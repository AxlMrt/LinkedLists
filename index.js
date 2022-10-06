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
        return lastNode
    }
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
class LinkedLists {
    constructor(head = null){
        this.head = head;
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

    head(){
        return this.head
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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

node1 = new Node(2);
node2 = new Node(18);
node3 = new Node(12);
node1.next = node2;
node2.next = node3;

let list = new LinkedLists(node1);
console.log(list.tail())
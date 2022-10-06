class LinkedLists {
    constructor(head = null){
        this.head = head;
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
console.log(list.head.next)
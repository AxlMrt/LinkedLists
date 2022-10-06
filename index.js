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

    pop(){
        if(this.head == null){
            return null;
        }

        if(this.head.next == null){
            return null;
        }

        let secondLast = this.head;
        while(secondLast.next.next != null){
            secondLast = secondLast.next;
        }

        secondLast.next = null;
        return this.head
    }

    contains(data){
        let current = this.head;
        while(current != null){
            if(current.value == data){
                return true;
                current = current.next;
            }
            return false;
        }
    }

    removeAt(index){
        if(this.head == null){
            return;
        }

        let temp = this.head;

        if(index == 0){
            this.head = temp.next;
            return;
        }

        for (let i = 0; temp != null && i < index - 1; i++){
            temp = temp.next
        }

        if(temp == null || temp.next == null){
            return;
        }

        let next = temp.next.next;
        temp.next = next;
    }

    insertAt(index, value){
        if (!this.head || index === 0){
            return this.head = new Node(value);
        }
        let current = this.head;
        let i = 1;
        while(current){
            if (i === index){
                const node = new Node(value)
                node.next = current.next;
                current.next = node;
                return this.head
            }
            current = current.next;
            i++;
        }
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
console.log(list.at(2));
list.removeAt(2);
console.log(list.at(2));
list.insertAt(2, 5);
console.log(list.at(2));
list.pop();
console.log(list.tail());
console.log(list.contains(15));
console.log(list.contains(12));
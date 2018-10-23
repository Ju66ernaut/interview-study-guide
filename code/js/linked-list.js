class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    delete(dataVal) {
        if (this.head === null) {
            console.log('head is null');
            return;
        }
        if (this.head.data === dataVal && this.head.next !== null) {
            this.head = this.head.next;
            console.log('data was found at head. head value is now ' + this.head.data)
        }
        if (this.head.data === dataVal && this.head.next === null) {
            this.head = null;
            console.log('data was found at head. head is now null')
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.data === dataVal) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }
    traverse() {
        if (this.head === null) {
            console.log('head is null');
        }
        else {
            let current = this.head;

            console.log(current.data);
            while (current.next !== null) {
                current = current.next;
                console.log(current.data);
            }
        }
    }
}

let ll = new LinkedList();
ll.append(new Node(2));
ll.append(new Node(5));
ll.append(new Node(3));
ll.append(new Node(7));
ll.traverse(); // 2 5 3 7
//console.log('deleting')
ll.delete(3); 
ll.traverse(); // 2 5 7
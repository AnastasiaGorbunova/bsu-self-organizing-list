class Node {
    constructor(data=null, next=null, prev=null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
        var temp = new Node(data);
        this.tail = temp;
        if (this.head == null) {
            this.head = temp;
        } else {

            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = temp;
            currentNode.next.prev = currentNode;
        }

        this.length++;
        return temp;
    }

    size() {
        if (this.head == null) {
            return 0;
        } else {
            return this.length;
        }
    }

    at(index) {
        if (index < 0 || this.length == 0 || index >= this.length) {
            return null;
        }
        var temp = this.head;
        var count = 0;
        while (count < index) {
            count++;
            temp = temp.next;
        }
        return temp.data;
    }

    findNode(data) {
        var temp = this.head;
        while (temp !== null) {
            if (temp.data == data) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    toArray() {
        var temp = this.head;
        var arr =[];
        while (temp !== null) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }

    removeAt(index) {
        var temp = this.head;
        if (this.head = null){
            return null;
        }

    }

    moveToFront(node) {
  
        if(this.head == node){
            return node;
        }

        if (this.tail == node) {
            this.tail = node.prev;
        }
        else {
            node.next.prev = node.prev;
            node.prev.next = node.next;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;    

    }

    reorganize(data) {
        var node = this.findNode(data);
        if(node == this.head) {
            return true;
        }
        if(this.length == 0) {
            return false;
        }
        if(!node) {
            return false;
        } else {
            this.moveToFront(node);
            return true;
        }
    }
}

module.exports={
        SelfOrganizedList,
        Node
        };

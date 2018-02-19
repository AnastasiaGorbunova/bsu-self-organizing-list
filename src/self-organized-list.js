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
        var currentNode = this.head;
        this.tail = temp;
        if (this.head == null) {
            this.head = temp;
        } else {

            
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
         if(index == 0 && this.length == 1)
        {
            this.length = 0;
            return true;
        }

        var i=0;
        while (i<index) {
            temp = temp.next;
            i++;
            }
       
        
        if(index != this.length-1) {
        temp.next.prev = temp.prev;
        }
        else {
            temp.prev.next = null;
            this.tail = temp.prev; 
        }
        
        if(index){
            temp.prev.next = temp.next;
        }
        else
        {
            temp.next.prev = null;
            this.head = temp.next; 
        }

        this.length--;
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
        var temp = this.findNode(data);
        if(temp == this.head) {
            return true;
        }
        if(this.length == 0) {
            return false;
        }
        if(!temp) {
            return false;
        } else {
            this.moveToFront(temp);
            return true;
        }
    }
}

module.exports={
        SelfOrganizedList,
        Node
        };

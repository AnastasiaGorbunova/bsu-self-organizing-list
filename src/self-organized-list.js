class Node {
    constructor(data=null, next=null,prev=null) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor( ) {
        this.head = null;
        this.tail = null;
        this.size=0;
    }

    insert(data) {
        var temp = new Node(data);
        this.tail=temp;
        if(this.head===null){
            this.head=temp;
        } else {
            
            var current=this.head;
            while (current.next){
                current=current.next;
            }
            current.next=temp;
            current.next.prev=current;
        }
        
        return this.size++;
     
    }

    size() {
        if(this.head===null){
            return 0;
        } 
        else
        {
            return this.size;
        }
    }

    at(index) {
       
    }

    findNode(data) {
        if (this.head===null){
            return null;
        }
    }

    toArray() {
        var arr=[]
        if (this.head===null){
            return arr;
        } 
    }
    removeAt(index) {
        
    }

    moveToFront(node) {

    }

    reorganize(data) {
       if (this.head===null){
        return false;
       }
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};

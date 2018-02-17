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
        this.length=0;
    }

    insert(data) {
        var temp = new Node(data);
        this.tail=temp;
        if(this.head==null){
            this.head=temp;
        } else {
            
            var currentNode=this.head;
            while (currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=temp;
            currentNode.next.prev=currentNode;
        }
        
        this.length++;
        return temp; //may be 
    }

    size() {
        if (this.head===null){
            return 0;
        }
        else
        {
            return this.length;
        }
    }

    at(index) {
       
    }

    findNode(data) {
      
    }

    toArray() {
        var temp=this.head;
        var arr=[];
        while(temp!==null){
            arr.push(temp.data);
            temp=temp.next;      
        }
        return arr;
    }
    removeAt(index) {/*
        count=1;
        length=this.length;
        currentNode=this.head;
        if (length === 0 || index < 1 || index > length) {
        throw new Error();
    }

        if (index===1){
            currentNode=currentNode.next;
            if(!currentNode){
                currentNode.prev=null;
            }
            else {
                this.tail=null;
            }
            if (index===length) {
                this.tail=this.tail.prev;
                this.tail.next=null;
            }
            else {
                while(count<index){
                    currentNode = currentNode.next;
                    count++;
                }
            }
            this.length--;
        }*/
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

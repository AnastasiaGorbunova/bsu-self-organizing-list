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
        if(this.size()){
            var temp = new Node(data);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        } else {
            this.tail = new Node(data);
            this.head = this.tail;
        }
        
        return this;
     
    }

    size() {
  		if(this.head){
  			return 0;
  		}
    }

    at(index) {
        if (this.size){
            return null;
        } 
    }

    findNode(data) {

    }

    toArray() {

    }

    removeAt(index) {

    }

    moveToFront(node) {

    }

    reorganize(data) {
       
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};

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
        if(this.length===null){
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
  		if(this.head===null){
  			return 0;
  		} else {
  			for (var i=1;this.head.next; i++){
  				this.head=this.head.next;
  			}
  			return i;
  		}
    }

    at(index) {
       if (this.head===null){
            return null;
        } 
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
       
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};

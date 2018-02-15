class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size=null;
    }

    insert(data) {
       if ( this.head==null && this.tail==null){
            this.data=this.head;
       }

      
    }

    size() {
       
    }

    at(index) {

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

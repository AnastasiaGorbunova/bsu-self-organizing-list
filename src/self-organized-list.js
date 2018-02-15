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
       if (this.size){


       }
      
    }

    size() {
       
    }

    at(index) {
        if (this.size===null){
            return true;
        }
        else {
            return false;
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

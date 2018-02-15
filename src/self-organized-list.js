class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.size=null
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {

      
    }

    size() {
        if(this.head==null & this.tail==null){
            this.size==null;
        }
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

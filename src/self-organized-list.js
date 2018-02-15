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
        this.length=null;
    }

    insert(data) {

        var elem = new Node(data, null, null);
        if (this.length===null){
            this.head=elem;
        }
     
    }

    size() {
        
       if (this.length===null){
            return 0;
        }

    }

    at(index) {
        if (this.length===null){
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

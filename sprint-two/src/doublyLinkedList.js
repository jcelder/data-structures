// class DoublyLinkedList extends LinkedList {
//     constructor() {
//         super()
        
//     }

//     addToHead(value) {
//         if (this.head === null) {
//             this.head = new DoubleNode(value);
//         }
//     }
// }

// class DoubleNode extends Node {
//     constructor() {
//         super()
//         this.previous = null;
//     }
// }

var DoublyLinkedList = () => {
    var obj = {};
    _.extend(obj, LinkedList())

    obj.addToHead = (value) => {
        var newNode = DoubleNode(value);    
        if (obj.head === null) {
            obj.head = newNode;
        } else {
            obj.head.previous = newNode;
            newNode.next = obj.head;
            obj.head = newNode;
        }
    }

    obj.removeTail = () => {
        obj.tail = obj.tail.previous;
        obj.tail.next = null;
    }
    
    return obj;
}

var DoubleNode = (value) => {
    var obj = {};
    _.extend(obj, Node(value))
    obj.previous = null;
    return obj;
}

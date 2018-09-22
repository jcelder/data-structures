var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail !== null) {
      list.tail.next = newNode;
    } else if (list.head === null) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.insert  = function (nodeValue, insertAfter) {
    var newNode = Node(nodeValue);
    var previousNode;
    var traverseList = function (node) {
      if (node.value === insertAfter) {
        previousNode = node;
      } else if (node.next) {
        traverseList(node.next); 
      } else {
        previousNode = 'not found';
      }
    }
    traverseList(this.head);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }

  list.removeHead = function() {
    if (list.head !== null) {
      var removedHead = list.head;
      list.head = list.head.next;
      return removedHead.value;
    }
  };

  list.contains = function(target, node) {
    if (node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {  
        return list.contains(target, node.next);  
      }
    } else {
      return list.contains(target, list.head);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

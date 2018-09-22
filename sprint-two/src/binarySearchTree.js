var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }    
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var resultNode = false;
  var traverseTree = function (node, value) {
    if (node !== undefined) {
      if (value === node.value) {
        resultNode = true;
      } else if (value < node.value) {
        return traverseTree(node.left, value);
      } else {
        return traverseTree(node.right, value);
      }
    }
  };
  traverseTree(this, value);
  return resultNode;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  var depthFirstRecursion = function(node, parentNode) {
    cb(node.value);
    if (node.left) {
      depthFirstRecursion(node.left);
    }
    if (node.right) {
      depthFirstRecursion(node.right);
    }
  };
  depthFirstRecursion(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

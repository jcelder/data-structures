var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target) {
  var exists = false;

  var traverseNodes = function(node) {
    
    if (node.value === target) {
      exists = true;
    } else if (node.children.length > 0) {
      _.each(node.children, function(child) {
        return traverseNodes(child);
      });
    }
  };

  traverseNodes(this);
  return exists;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  addChild is O(n) if you dont have the node you want to add the child to, otherwise its O(1)
// contains is once again O(n) because the worst case scenario is you will have to traverse through the entire tree
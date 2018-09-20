var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  debugger;
  if (this.value === target) {
    return true;
  } else if (this.value !== target) {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].contains(target);
    }
  }
  return false; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push([node, []]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToRemove; //[1, [2, 3]]
  this.storage = _.filter(this.storage, (elem) => {
    if (elem[0] === node) {
      nodeToRemove = elem;
      return false;
    } else {
      return true;
    }
  });
  _.each(nodeToRemove[1], (elem) => {
    this.removeEdge(nodeToRemove[0], elem);
  });

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === fromNode) {
      for (var j = 0; j < this.storage[i][1].length; j++) {
        if (this.storage[i][1][j] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // O(n): always traverses all nodes
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === fromNode) {
      this.storage[i][1].push(toNode);
    } else if (this.storage[i][0] === toNode) {
      this.storage[i][1].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === fromNode) {
      this.storage[i][1] = _.filter(this.storage[i][1], function(node) {
        return node !== toNode;
      });
    } else if (this.storage[i][0] === toNode) {
      this.storage[i][1] = _.filter(this.storage[i][1], function(node) {
        return node !== fromNode;
      });
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addNode is constant time O(1)
 * .contains is linear O(n)
 * .removeNode is quadratic O(n^2)
 * .hasEdge is quadratic O(n^2)
 * .addEdge is linear O(n)
 * .removeEdge is quadratic O(n^2)
 * .forEachNode is linear O(n)
 */



var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fixed
  return set;
};

var setPrototype = {};
//time complexity = O(1) or constant time (no loops)
setPrototype.add = function(item) {
  this._storage[item] = item;
};
//time complexity = O(n) or linear time (1 loops)
setPrototype.contains = function(item) {
  var result = false;
  _.each(this._storage, function (ele) {
    if (ele === item) {
      result = true;
    }
  });
  return result;
};
//time complexity = O(1) or constant time (no loops)
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

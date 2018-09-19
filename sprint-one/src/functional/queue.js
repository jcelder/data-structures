var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  var currentHead = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentSize] = value;
    currentSize++;
  };

  someInstance.dequeue = function() {
    currentSize--;
  };

  someInstance.size = function() {
    return currentSize;
  };

  return someInstance;
};

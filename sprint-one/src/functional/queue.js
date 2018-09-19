var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  var currentTail = 0;
  var currentHead = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentTail] = value;
    currentSize++;
    currentTail++;
  };

  someInstance.dequeue = function() {
    if (currentSize === 0) {
      return someInstance.size();
    } else {
      var dequeuedItem = storage[currentHead];
      currentSize--;
      currentHead++;
      if (currentHead > currentTail) {
        currentHead = currentTail;
      }
      return dequeuedItem;
    }
  };

  someInstance.size = function() {
    return currentSize;
  };

  return someInstance;
};

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[currentSize] = value;
    currentSize++;
  };

  someInstance.pop = function() {
    if (currentSize === 0) {
      return someInstance.size();
    } else {
      var poppedItem = storage[currentSize - 1];
      storage[currentSize - 1] = null;
      currentSize--;
      return poppedItem;
    }
  };

  someInstance.size = function() {
    return currentSize;
  };

  return someInstance;
};

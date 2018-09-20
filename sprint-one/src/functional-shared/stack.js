var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.currentSize = 0;
  stackInstance.storage = {};

  _.extend(stackInstance, stackMethods);

  return stackInstance;
};

stackMethods = {};
stackMethods.push = function(string) {
  this.storage[this.currentSize] = string;
  this.currentSize++;
};

stackMethods.pop = function() {
  if (this.currentSize === 0) {
    return this.currentSize;
  } else {
    var poppedString = this.storage[this.currentSize - 1];
    delete this.storage[this.currentSize];
    this.currentSize--;
    return poppedString;
  }
};

stackMethods.size = function() {
  return this.currentSize;
};




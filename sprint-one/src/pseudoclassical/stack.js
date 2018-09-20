var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;
};

Stack.prototype.push = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Stack.prototype.pop = function() {
  if (this.currentSize === 0) {
    return this.currentSize;
  }
  var poppedValue = this.storage[this.currentSize];
  delete this.storage[this.currentSize];
  this.currentSize--;
  return poppedValue;
};

Stack.prototype.size = function() {
  return this.currentSize;
};

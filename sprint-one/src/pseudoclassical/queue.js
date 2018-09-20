var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;
  this.currentHead = 1;
};

Queue.prototype.enqueue = function(value) {
  if (this.currentHead > this.currentSize) {
    this.storage[this.currentHead + this.currentSize] = value;
    this.currentSize++;
  } else {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  }
};

Queue.prototype.dequeue = function() {
  if (this.currentSize === 0) {
    this.currentHead = 1;
    return this.currentSize;
  }
  var dequeuedValue = this.storage[this.currentHead];
  delete this.storage[this.currentHead];
  this.currentHead++;
  this.currentSize--;
  return dequeuedValue;
};

Queue.prototype.size = function() {
  return this.currentSize;
};

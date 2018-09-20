var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.storage = {};
  queueInstance.currentSize = 0;
  queueInstance.currentHead = 1;

  _.extend(queueInstance, queueMethods);
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.currentSize === 0) {
    this.storage[this.currentHead] = value;
    this.currentSize++;
  } else if (this.currentHead > this.currentSize) {
    this.storage[this.currentHead + this.currentSize] = value;
    this.currentSize++;
  } else {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  }
};
queueMethods.dequeue = function() {
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
queueMethods.size = function() {
  return this.currentSize;
};


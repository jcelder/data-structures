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

queueMethods.enqueue = function() {};
queueMethods.dequeue = function() {};
queueMethods.size = function() {
  return this.currentSize;
};


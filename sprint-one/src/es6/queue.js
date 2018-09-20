class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
    this.currentHead = 1;
  }

  enqueue(value) {
    if (this.currentHead > this.currentSize) {
      this.storage[this.currentHead + this.currentSize] = value;
      this.currentSize++;
    } else {
      this.currentSize++;
      this.storage[this.currentSize] = value;
    }
  }

  dequeue() {
    if (this.currentSize === 0) {
      this.currentHead = 1;
      return this.currentSize;
    } else {
      var dequeuedValue = this.storage[this.currentHead];
      delete this.storage[this.currentHead];
      this.currentHead++;
      this.currentSize--;
      return dequeuedValue;
    }
  }

  size() {
    return this.currentSize;
  }
}

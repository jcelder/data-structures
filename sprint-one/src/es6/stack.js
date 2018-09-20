class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  push(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  }

  pop() {
    if (this.currentSize === 0) {
      return this.currentSize;
    }
    var poppedValue = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize--;
    return poppedValue;
  }

  size() {
    return this.currentSize;
  }
}
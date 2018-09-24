

var HashTable = function() {
  this._limit = 8; this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  if (typeof k === 'string') {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    var keyIndex = -1;

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        keyIndex = i;
      }
    }

    if (keyIndex >= 0) {
      bucket[keyIndex] = [k, v];
    } else {
      bucket.push([k, v]);
    } 

    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrievedBucket = this._storage.get(index);
  for (var i = 0; i < retrievedBucket.length; i++) {
    if (retrievedBucket[i][0] === k) {
      return retrievedBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  bucket = _.filter(bucket, (tuple) => {
    tuple[0] !== k;
  });
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert is constant time, assuming that you do not have to search 
// through the entire bucket to update an object. This is the same for retrieve and remove.

// getIndexBelowMaxForKey = function(str, max)
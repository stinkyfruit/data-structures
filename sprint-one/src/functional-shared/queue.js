var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    firstElementIndex: 0,
    count: 0
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.firstElementIndex + this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if(this.count !== 0) {
    var temp = this.storage[this.firstElementIndex];
    delete this.storage[this.firstElementIndex];
    this.firstElementIndex++;
    this.count--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.count;
};
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.firstElementIndex = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.firstElementIndex + this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
  if (this.count !== 0) {
    var temp = this.storage[this.firstElementIndex];
    delete this.storage[this.firstElementIndex];
    this.firstElementIndex++;
    this.count--;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.count;
}



var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.currentIndex = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //O(n)
  if(!this.contains(item)) {
    this._storage[this.currentIndex] = item;
    this.currentIndex++;
  }
};

setPrototype.contains = function(item){
  //O(n)
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  //O(n)
  for(var prop in this._storage) {
    if(item === this._storage[prop]) {
      delete this._storage[prop];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

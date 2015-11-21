var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === null) {
    //if the hashFunction index is available
    this._storage.set(i, v);
    this._keys.push(k);
  } else {
    //if the hashFunction index is NOT available
    //this._keys = ['a'], insert('a', 'newValue')
    if(this._keys.indexOf(k) !== -1) {
      this._storage.set(i, v);
    } else {
      //double size and recalculate the new indexes for the new array
      this._limit *= 2;
      var temp = LimitedArray(this._limit); //storage double the size
      for(var i = 0; i < this._keys.length; i++) {
        var key = this._keys[i];
        //key = 'first'
        var oldIndex = getIndexBelowMaxForKey(key, this._limit/2);
        //index of 'first' in the old storage
        var value = this._storage.get(oldIndex);
        var newIndex = getIndexBelowMaxForKey(key, this._limit);
        temp.set(newIndex, value);
      }
      this._storage = temp;
      i = getIndexBelowMaxForKey(k, this._limit);
      this._storage.set(i, v);
        //for every key we have
          //add that key-value pair into temp
        //this._storage = temp
    } 
  }
  
    //either the key is the exact same
      //overwrite
    //or the key was a different value
      //double size and rehash

// ['a','b'], limit =2
// insert('c') -> hashfunction('c') = index thats already occupied
// limit = 4, temp = new LimitedArray object. temp.storage = [null,null,null,null]
// loop through line 31's array (this._storage)
// 
// 
// 

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  //hash the key into a usable index 
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

//this._storage[index] _storage is a LimitedArray object
//this._storage[i] -> accessing the i property of obj
//this._storage.storage = []
//this._storage(set/get/each) -> interacts with the inner storage array


/*
 * Complexity: What is the time complexity of the above functions?
 */

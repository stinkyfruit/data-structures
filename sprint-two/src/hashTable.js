var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //result of hashing the key
  //storage[0] is all the key-value pairs when hash(k) === 0 (buckets) tuples are key-value pairs [k,v]
  var found = false;
  //get the bucket for the i
  var bucket = this._storage.get(i);
  //if bucket doesn't exist, create it

  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);  
  }

  //check inside the bucket (loop)
  
  for(var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    } 
  }

  if(!found) {
    bucket.push([k, v]);
  }
    //look for the key in tuple[0]
      //replace tuple[1] with new v
    //otherwise (key doesn't exist)
      //add a new [k,v] tuple to the bucket
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i); //retrieves the bucket at index i
  
  //hashtable = HashTable()
  //hashtable.retrieve('a') -> all the indexes are undefined
  if(bucket) { //if bucket exists (not undefined)
    for(var i = 0; i < bucket.length; i++) { //loop through bucket to search for the key
      var tuple = bucket[i]; //create the tuple
      if(tuple[0] === k) {
        return tuple[1]; //value
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if(bucket) {
    for(var i = 0; i <bucket.length; i++) {
      var tuple = bucket[i];
      if(tuple[0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
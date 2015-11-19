var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstElementIndex = 0;
  var count = 0;  

  // Implement the methods below
// storage = {0:a,1:b,2:c}
// storage[0] = a, storage[1] = b, storage[2] = c
// = [0,1,2,3,4,5] 
// i = 0
// storage[0] = storage[1] -> [1,1,2,3,4,5]
// i = 1
// storage[1] = storage[2] -> [1,2,2,3,4,5]
//storage[0]
// [a,b,c,d,e]
// delete storage[firstElementIndex]
// delete storage[0] -> [b,c,d,e] storage[1] = b
// [0,0,0,a,b,c,d] -> firstElementIndex = 3, count = 4
// storage[4] = 'new element'


  someInstance.enqueue = function(value){
    storage[firstElementIndex + count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if(count !== 0) {
      var temp = storage[firstElementIndex];
      delete storage[firstElementIndex];
      firstElementIndex++;
      count--;
      return temp;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
// storage = {0:a,1:b,2:c}
// storage[0] = a, storage[1] = b, storage[2] = c
// = [0,1,2,3,4,5] 
// i = 0
// storage[0] = storage[1] -> [1,1,2,3,4,5]
// i = 1
// storage[1] = storage[2] -> [1,2,2,3,4,5]
// 
// someInstance
// stack1.storage ={}
//stack1.push('a') -> {'a'}
// stack2.storage = {1,2,3,4}
// stack2.push('a')- >[1,2,3,4,'a']
// 

  someInstance.enqueue = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function(){
    var temp = storage[0];
    for(var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[someInstance.size() - 1];
    return temp;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};

var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    //add an element to the top of the stack i.e. Stack.push(element);
    //storage[newIndex] = value;
    //storage = {0:a,1:b}
    //storage[2] = c
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function(){
    //removes the very top element from the stack
    var temp = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return temp;
  };

  someInstance.size = function(){
    //returns how many elements are in storage
    return Object.keys(storage).length;
  };

  return someInstance;
};

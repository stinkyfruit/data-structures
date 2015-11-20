var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create new node that will be the new tail
    //create node
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    }
    //set current tail's next to this node
    if(list.tail !== null) {
      list.tail.next = newNode;
    }
    
    //next is going to be null
    //set list.tail to new node
    list.tail = newNode;
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target, node){
    node = node || this.head;
    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return this.contains(target, node.next);
    } else {
      return false;
    }
    //if currentnode.value is target
      //return true
    //otherwise
      //if next exists, recurse
      //otherwise, return false
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

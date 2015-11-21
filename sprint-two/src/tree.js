var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //O(1)
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  //O(n)
  //if the Tree's value is equal to targe  
  //return true
  //otherwise is tree has child 
  //loop through children and compare values to  targt
  //if value isn't found, return false
  //O
  //[A,B,C,D] -> [false, false, true, false]
  //found = found || false, found = found || false, found = found || true, found = found || false


  var found = false;
  if (target === this.value) {
    found = true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      found = found || this.children[i].contains(target);
    }
  } else {
    found = false;
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var BinarySearchTree = function(value) {
  //var bst = BinarySearchTree(val)
  var newBST = Object.create(bstMethods);
  newBST.value = value;
  newBST.left = null; //left and right reference other BinarySearchTrees
  newBST.right = null; //shouldnt start with children
  return newBST;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var bstMethods = {};

bstMethods.insert = function(value) {
  //O(log n)
  //trying to insert value into reference tree
  //if 'value' < this tree.value
  if (value < this.value) { //this if statement handles left check
    if (this.left === null) { //so left child is unoccupied
      this.left = BinarySearchTree(value);
    } else { //if left child is occupied
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  //left side (left child) 
  //this tree.left === null
  //this tree.left = new Tree('value')
  //otherwise
  //recursively call this tree.left.insert('value')

}

bstMethods.contains = function(val) {
  //O(log n)
  //if we found the value in the current bst
  //current tree.value = 5, we want to search for: 4
  if (this.value === val) { //5 !== 4
    return true;
  } else {
    if (val < this.value) { //if the val is lower, recursively search left side
      //check that a left child actually exists
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(val);
      }
    } else { //otherwise, val is greater, recursively search right side
      if (val > this.value) {
        if (this.right === null) {
          return false;
        } else {
          return this.right.contains(val);
        }
      }
    }
  }
}

bstMethods.depthFirstLog = function(cb) {
  //O(n)
  //check to see if left is null, if not, perform function
  //do need to check if left & right are null
  cb(this.value);
  if(this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(cb);
  }

}
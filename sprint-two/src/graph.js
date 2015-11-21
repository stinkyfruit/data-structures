// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //O(1)
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //O(n)
  return _.contains(this.nodes, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //O(n)
  var index = _.indexOf(this.nodes, node);
  if (index > -1) {
    this.nodes.splice(index, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //O(n)
  //this.edges = [[a,b], [b,c]]
  //hasEdge(a,b) -> should search for [a,b] and [b,a]
  //index of [a,b] = index = 0 of the this.edges array, value a, and get 
  //this.edges.contains([a,b])
  var found = false;
  for (var i = 0; i < this.edges.length; i++) {
    // for(var j = 0; j < this.edges[j].length; j++) {
    //   if()
    // }
    var edge = this.edges[i]; //[a,b]
    //this.hasEdge('a','b')
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[0] === toNode && edge[1] === fromNode)) {
      found = true;
    }
  }
  return found;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //O(n)
  if (this.contains(fromNode) && this.contains(toNode)) {
    //check if this.edges doesn't already contain the edge we're trying to add.
    if (this.hasEdge(fromNode, toNode) === false) {
      this.edges.push([fromNode, toNode]);
    }
    //add new edge to this.edges
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //O(n)
  //check if this.edges contains the edge we're trying to remove
  if (this.hasEdge(fromNode, toNode) === true) {
    //figure out some way to splice the array
    var index = _.indexOf([fromNode, toNode]);
    if (index === -1) {
      index = _.indexOf([toNode, fromNode]);
    }
    this.edges.splice(index, 1);
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //O(n)
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
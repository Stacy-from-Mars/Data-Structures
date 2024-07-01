var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  if (!tree.root) return true
  function isBadDirection(node, direction) {
    if (!node[direction]) return false
    return (direction === "left") ?
      (node.value <= node.left.value) :
      (node.value >= node.right.value) || !isGoodTree(node[direction])
  }

  function isGoodTree(node) {
    if (isBadDirection(node, "left")) return false
    if (isBadDirection(node, "right")) return false
    return true
  }
  return isGoodTree(tree.root)
  // Only change code above this line
}
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.isPresent = function (value) {
        let currentNode = this.root
        if (!this.root) {
            return false
        }
        while (currentNode && currentNode.value !== value) {
            if (value > currentNode.value) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return currentNode
    }
    // Only change code above this line
}
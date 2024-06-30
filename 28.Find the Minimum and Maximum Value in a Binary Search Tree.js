var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.findMin = function () {
        let currentNode = this.root
        if (!this.root) {
            return null
        }
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }
    this.findMax = function () {
        let currentNode = this.root
        if (!this.root) {
            return null
        }
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    // Only change code above this line
}
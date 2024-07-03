var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.invert = function (root = this.root) {
        if (!root) return null
        let temp = root.left
        root.left = root.right
        root.right = temp
        this.invert(root.left)
        this.invert(root.right)
    }
    // Only change code above this line
}
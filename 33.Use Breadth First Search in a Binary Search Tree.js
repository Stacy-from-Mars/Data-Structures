var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    function traverse(direction, root) {
        const queue = [root]
        const results = []
        function pushIfThere(node, queue) {
            if (node) queue.push(node)
        }
        while (queue.length > 0) {
            const node = queue.shift()
            results.push(node.value)
            if (direction === "level") {
                pushIfThere(node.left, queue)
                pushIfThere(node.right, queue)
            } else {
                pushIfThere(node.right, queue)
                pushIfThere(node.left, queue)
            }
        }
        return results
    }
    this.levelOrder = function () {
        if (!this.root) return null
        return traverse("level", this.root)
    }
    this.reverseLevelOrder = function () {
        if (!this.root) return null
        return traverse("reverseLevel", this.root)
    }
    // Only change code above this line
}
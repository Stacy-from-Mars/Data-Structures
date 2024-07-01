var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.inorder = function () {
        if (!this.root) return null
        function traverse(node) {
            if (!node) return []
            const nodes = traverse(node.left)
            nodes.push(node.value)
            nodes.push(...traverse(node.right))
            return nodes
        }
        return traverse(this.root)
    }

    this.preorder = function () {
        if (!this.root) return null
        function traverse(node) {
            if (!node) return []
            const nodes = [node.value]
            nodes.push(...traverse(node.left))
            nodes.push(...traverse(node.right))
            return nodes
        }
        return traverse(this.root)
    }

    this.postorder = function () {
        if (!this.root) return null
        function traverse(node) {
            if (!node) return []
            const nodes = traverse(node.left)
            nodes.push(...traverse(node.right))
            nodes.push(node.value)
            return nodes
        }
        return traverse(this.root)
    }
    // Only change code above this line
}
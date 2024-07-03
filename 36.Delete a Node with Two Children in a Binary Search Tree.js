var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.remove = function (value) {
        if (!this.root) return null
        let parent
        let target = this.root
        while (target && target.value !== value) {
            parent = target
            if (target.value > value) {
                target = target.left
            } else {
                target = target.right
            }
        }
        if (!target) return null
        //in case no children or one children
        if (!target.left && !target.right) {
            const replace = target.right ? target.right : target.left
            if (!parent) {
                this.root = replace
            } else {
                const direction = parent.left === target ? "left" : "right"
                parent[direction] = replace
            }
        } else {
            // in case two children
            const newValue = this.findMin(target.right)
            this.remove(newValue)
            target.value = newValue
        }
    }
    this.findMin = function (node) {
        if (!node) return null
        return node.left ? this.findMin(node.left) : node.value
    }
    this.findMax = function (node) {
        if (!node) return null
        return node.right ? this.findMax(node.right) : node.value
    }
}
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
        const replace = target.right ? target.right : target.left
        if (!parent) {
            this.root = replace
        } else {
            const direction = parent.left === target ? "left" : "right"
            parent[direction] = replace
        }
    }
}
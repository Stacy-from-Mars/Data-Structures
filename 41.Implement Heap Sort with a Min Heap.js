function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++)
        if (a[i] > a[i + 1])
            return false;
    return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5) {
    let a = new Array(size);
    for (let i = 0; i < size; i++)
        a[i] = Math.floor(Math.random() * 100);

    return a;
}

const array = createRandomArray(25);

var MinHeap = function () {
    // Only change code below this line
    this.heap = []
    this.parent = index => {
        return Math.floor(index - 1 / 2)
    }
    this.insert = function (value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    this.heapifyUp = index => {
        let currentIndex = index
        let parentIndex = this.parent(currentIndex)
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.parent(parentIndex)
        }
    }
    this.swap = (index1, index2) => {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    this.remove = function () {
        let root = this.heap[0]
        let index = 0
        this.heap[index] = this.heap.pop()
        while (this.heap[index] > this.heap[index * 2 + 1] || this.heap[index] < this.heap[index * 2 + 2]) {
            let childIndex = this.heap[index * 2 + 1] < this.heap[index * 2 + 2] ? index * 2 + 1 : index * 2 + 2
            this.swap(index, childIndex)
            index = childIndex
        }
        return root
    }
    this.sort = function () {
        return this.heap
    }
    // Only change code above this line
};
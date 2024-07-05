const MaxHeap = function () {
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }
  this.heapifyUp = index => {
    let currentIndex = index
    let parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code below this line
  this.remove = () => {
    let root = this.heap[0]
    let index = 0
    this.heap[index] = this.heap.pop()
    while (this.heap[index] < this.heap[index * 2 + 1] || this.heap[index] < this.heap[index * 2 + 2]) {
      let childIndex = this.heap[index * 2 + 1] > this.heap[index * 2 + 2] ? index * 2 + 1 : index * 2 + 2
      this.swap(index, childIndex)
      index = childIndex
    }
    return root
  }
  // Only change code above this line
};
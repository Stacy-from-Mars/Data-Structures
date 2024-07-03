var MaxHeap = function () {
  // Only change code below this line
  this.heap = [];
  this.parent = index => {
    return Math.floor((index - 1) / 2);
  }
  this.insert = element => {
    this.heap.push(element);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0 && element > this.heap[this.parent(currentIndex)]) {
      let parentIndex = this.parent(currentIndex)
      this.heap[currentIndex] = this.heap[parentIndex]
      this.heap[parentIndex] = element
      currentIndex = parentIndex;
    }
  }
  this.print = () => {
    return this.heap;
  }
  // Only change code above this line
};
function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (item) {
        let index = this.collection.findIndex(el => el[1] > item[1])
        if (index !== -1) {
            return this.collection.splice(index, 0, item)
        } else {
            return this.collection.push(item)
        }
    }
    this.dequeue = function () {
        return this.collection.shift()[0]
    }
    this.front = function () {
        return this.collection[0][0]
    }
    this.size = function () {
        return this.collection.length
    }
    this.isEmpty = function () {
        return this.size() === 0
    }
    // Only change code above this line
}

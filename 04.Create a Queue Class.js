function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function (value) {
        return collection.push(value)
    }
    this.dequeue = function () {
        return collection.shift()
    }
    this.front = function () {
        return collection[0]
    }
    this.size = function () {
        return collection.length
    }
    this.isEmpty = function () {
        collection.length
    }
    // Only change code above this line
}

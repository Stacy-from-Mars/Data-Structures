var Map = function () {
    this.collection = {};
    // Only change code below this line
    this.has = function (key) {
        return this.collection.hasOwnProperty(key)
    }
    this.add = function (key, value) {
        return this.collection[key] = value
    }
    this.remove = function (key) {
        if (this.has(key)) {
            delete this.collection[key]
        }
    }
    this.get = function (key) {
        if (this.has(key)) {
            return this.collection[key]
        } else {
            return undefined
        }
    }
    this.values = function () {
        return Object.values(this.collection)
    }
    this.size = function () {
        return Object.entries(this.collection).length
    }
    this.clear = function () {
        return this.collection = {}
    }
    // Only change code above this line
};
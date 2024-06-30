var called = 0;
var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
var HashTable = function () {
    this.collection = {};
    // Only change code below this line
    this.add = (key, value) => {
        const hashedKey = hash(key)
        if (!this.collection.hasOwnProperty(hashedKey)) {
            this.collection[hashedKey] = {}
        }
        this.collection[hashedKey][key] = value
    }
    this.remove = (key) => {
        const hashedKey = hash(key)
        if (this.collection.hasOwnProperty(hashedKey)) {
            delete this.collection[hashedKey][key]
        }
        if (Object.keys(this.collection[hashedKey]).length == 0) {
            delete this.collection[hashedKey]
        }
    }
    this.lookup = (key) => {
        const hashedKey = hash(key)
        if (!this.collection.hasOwnProperty(hashedKey) || !this.collection[hashedKey].hasOwnProperty(key)) {
            return null
        }
        return this.collection[hashedKey][key]
    }
    // Only change code above this line
};
var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // Only change code below this line
    this.reverse = function () {
        let current = this.head
        let temp = null
        if (!this.head) {
            return null
        }
        while (current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            //current = current.prev
        }
        if (temp != null) {
            this.head = temp.prev
        }
    }
    // Only change code above this line
};
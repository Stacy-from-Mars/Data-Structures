var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // Only change code below this line
    this.add = function (data) {
        let newNode = new Node(data, this.tail)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            let temp = this.tail
            temp.next = newNode
            this.tail = newNode
        }
    }

    this.remove = function (data) {
        if (!this.head) {
            return null
        }
        let current = this.head
        while (current !== this.tail) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next
                    current.next.prev = null
                } else {
                    let previous = current.prev
                    previous.next = current.next
                }
            }
            current = current.next
        }
        if (current.data === data) {
            this.tail = current.prev
            current.prev.next = null
        }
    }
    // Only change code above this line
};
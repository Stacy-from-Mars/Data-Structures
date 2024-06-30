function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };

    // Only change code below this line
    this.isEmpty = function () {
        return this.size > 0 ? false : true
    }
    this.indexOf = function (element) {
        let currentNode = head
        let indexFound = false
        let index = -1
        while (!indexFound && currentNode) {
            index++
            if (currentNode.element === element) {
                indexFound = true
            }
            currentNode = currentNode.next
        }
        return indexFound ? index : -1
    }
    this.elementAt = function (index) {
        let currentNode = head
        let currentElement
        let indexReached = false
        let currentIndex = -1
        while (!indexReached && currentNode) {
            currentIndex++
            currentElement = currentNode.element
            if (currentIndex === index) {
                indexReached = true
            }
            currentNode = currentNode.next
        }
        return indexReached ? currentElement : undefined
    }
    // Only change code above this line
}
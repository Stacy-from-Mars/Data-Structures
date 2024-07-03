var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    // Only change code below this line
    this.root = new Node()

    this.add = function (wordToAdd) {
        console.log(wordToAdd);

        function recursion(word, root) {
            if (word) {
                if (Object.keys(root.keys).includes(word[0])) {
                    let letter = word[0]
                    recursion(word.substring(1), root.keys[letter])
                } else {
                    const node = new Node()
                    let letter = word[0]
                    root.keys[letter] = node
                    if (word.length === 1) {
                        node.setEnd()
                    }
                    recursion(word.substring(1), root.keys[letter])
                }
            }
        }
        recursion(wordToAdd, this.root)
    }

    this.isWord = function (word) {
        let root = this.root
        while (word) {
            let letter = word[0]
            if (Object.keys(root.keys).includes(letter)) {
                if (word.length === 1) {
                    if (!root.keys[letter].isEnd()) {
                        return false
                    }
                }
                word = word.substring(1)
            } else {
                return false
            }
            root = root.keys[letter]
        }
        return true
    }

    this.print = function () {
        const words = []

        function recursion(root, word) {
            if (Object.keys(root.keys).length != 0) {
                for (let letter of Object.keys(root.keys)) {
                    recursion(root.keys[letter], word.concat(letter))
                }
                if (root.isEnd()) {
                    words.push(word)
                }
            } else {
                word.length > 0 ? words.push(word) : undefined
                return
            }
        }
        recursion(this.root, "")
        console.log(words)
        return words
    }

    // Only change code above this line
};
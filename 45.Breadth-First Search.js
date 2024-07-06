function bfs(graph, root) {
    var nodesLen = {}
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity
    }

    let queue = [root]
    nodesLen[root] = 0
    let current

    while (queue.length > 0) {
        current = queue.shift()
        let connected = graph[current]
        let neighbor = []
        let index = connected.indexOf(1)
        while (index !== -1) {
            neighbor.push(index)
            index = connected.indexOf(1, index + 1)
        }
        for (let j = 0; j < neighbor.length; j++) {
            if (nodesLen[neighbor[j]] === Infinity) {
                nodesLen[neighbor[j]] = nodesLen[current] + 1
                queue.push([neighbor[j]])
            }
        }
    }
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
function dfs(graph, root) {
    let stack = []
    let visited = []
    let neighbors = []
    let temp
    stack.push(root)
    while (stack.length > 0) {
        temp = stack.pop()
        if (visited.indexOf(temp) == -1) {
            visited.push(temp)
            neighbors = graph[temp]
            for (let i = 0; i < neighbors.length; i++) {
                if (neighbors[i] == 1) {
                    stack.push(i)
                }
            }
        }
    }
    return visited
}

var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));


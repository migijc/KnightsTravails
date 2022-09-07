class Node {
    constructor(coordinates) {
        this.value = coordinates
        this.possibleMoves = []
    }
}

class Tree {
    constructor(startCoordinates) {
        this.value = startCoordinates
        this.possibleMoves = []

    }
}
class Knight {
    constructor() {
        this.piece = "Knight"
        this.potentialPaths = null
    }
    moveKnight(start, end, currentPlay, node, q) {
        currentPlay = currentPlay || new Tree(start)
        node = node || currentPlay
        let potentialRoutes = this.possibleMoves(start)
        potentialRoutes.forEach(route => {
            let newNode = new Node(route)
            node.possibleMoves.push(newNode)
        })
        q = q || []
        let nodePossibleMoves = node.possibleMoves
        nodePossibleMoves.forEach(currentNode => {
            q.push(currentNode)
        })
        while (q[0].value.toString() !== end.toString()) {
            let newStart = q.shift()
            let newStartPossibleMoves = this.possibleMoves(newStart)
            newStartPossibleMoves.forEach(move => {
                q.push(move)
            })
            this.moveKnight(newStart.value, end, currentPlay, newStart, q)
        }
       if(typeof currentPlay!=undefined){ 
           return this.findAllRoutes( currentPlay,end)  
       }
    }

    possibleMoves(coordinates) {
        let x = coordinates[0]
        let y = coordinates[1]
        let potentialMoves = [[x - 1, y + 2], [x - 1, y - 2], [x - 2, y - 1], [x - 2, y + 1], [x + 1, y - 2], [x + 1, y + 2], [x + 2, y - 1], [x + 2, y + 1]]
        potentialMoves.forEach(move => {
            let x = move[0]
            let y = move[1]
            if (x < 0 || y < 0 || x > 7 || y > 7) {
                move = null
            }
        })
        return potentialMoves.filter(move => {
            return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
        })
    }


    findAllRoutes (tree, end, node, path, allRoutes) {
        node = node || tree
        let possibleMoves = node.possibleMoves
        path = path || [tree.value]
        allRoutes = allRoutes || []
        if (path[path.length - 1].toString() == end.toString()) {
            allRoutes.push(path)
            return allRoutes
        }
        else {
            possibleMoves.forEach(move => {
                let copyPath = path.map(item => {
                    return item
                })
                copyPath.push(move.value)
                return this.findAllRoutes(tree, end, move, copyPath, allRoutes)
            })
        }
        while(allRoutes.length != 0){
            return this.comparePaths(allRoutes)
        }
    }

        comparePaths(allRoutes) {
        if(allRoutes.length==1){
            return allRoutes
        } 
        else{
            let indexZeroLength= allRoutes[0].length
            let lastIndexLength = allRoutes[allRoutes.length-1].length 
            if(indexZeroLength==lastIndexLength){
                allRoutes.pop() 
                let returnArray= allRoutes
                return this.comparePaths(returnArray)
            }else if(indexZeroLength < lastIndexLength){
                allRoutes.pop() 
                let returnArray= allRoutes
                return this.comparePaths(returnArray)
            }else{
                allRoutes.shift() 
            let returnArray= allRoutes
            return this.comparePaths(returnArray)
            }
        } 
    }
}

let myKnight = new Knight()

let pathToEnd = (myKnight.moveKnight([2,2], [3,7]))
console.log(pathToEnd)



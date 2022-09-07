class Node{
    constructor(coordinates){
        this.value=coordinates
        this.possibleMoves=[]
    }
}

class Tree{
    constructor(startCoordinates){
        this.value=startCoordinates
        this.possibleMoves=[] 

    }
}


 class Knight{
     constructor(){
         this.piece="Knight"
         this.potentialPaths=null 
     }
     moveKnight(start, end, currentPlay,node,q){
         console.log(start)  
         if(start.toString()== end.toString()){
             return 
         }
         else{
            currentPlay=currentPlay||new Tree(start)
            node=node||currentPlay
            let potentialRoutes= this.possibleMoves(start) 
            potentialRoutes.forEach(route=>{
                let newNode= new Node(route)
                console.log(node)
                node.possibleMoves.push(newNode)
            })  
            q=q||[]
            let nodePossibleMoves=node.possibleMoves 
            nodePossibleMoves.forEach(currentNode=>{
                q.push(currentNode)
            }) 
            while(q.length > 0){
                let newStart=q.shift()
                if(newStart.value.toString()==end.toString()){
                }
                let newStartPossibleMoves=this.possibleMoves(newStart)
                newStartPossibleMoves.forEach(move=>{
                    q.push(move)
                })
                console.log(newStart)
                this.moveKnight(newStart.value, end, currentPlay, newStart, q)   
            }
         }
       
         
     } 
 
     possibleMoves(coordinates){
         let x=coordinates[0]
         let y=coordinates[1]
         let potentialMoves=[[x-1,y+2], [x-1,y-2],[x-2,y-1],[x-2,y+1],[x+1,y-2], [x+1,y+2], [x+2,y-1], [x+2,y+1]]
         potentialMoves.forEach(move=>{
             let x=move[0]
             let y= move[1] 
             if(x<0  || y<0 || x>7 || y>7){
                 move=null
             }
         })
          return potentialMoves.filter(move=> {
             return move[0]>=0 && move[0]<=7 && move[1] >=0 && move[1] <=7 
        })
     }
 }


 let myKnight= new Knight()
 myKnight.moveKnight([0,0], [5,6])





// myKnight.moveKnight([0,0], [5,6]) 



// let q=[]
// let testTree=new Tree([0,0])
// let arr= myKnight.possibleMoves([0,0])
// arr.forEach(move=>{
//     let newNode= new Node(move)
//     testTree.possibleMoves.push(newNode) 
// })
// // console.log(testTree.possibleMoves)
// testTree.possibleMoves.forEach(node=>{
//     arr=myKnight.possibleMoves(node.value)
//     arr.forEach(move=>{
//         newNode= new Node(move)
//         node.potentialMoves.push(newNode)
//     })
// })


// testTree.possibleMoves.forEach(node=>{
//     // console.log(node) 
//     node.potentialMoves.forEach(moves=>{
//         // console.log(moves)
//         arr=myKnight.possibleMoves(moves.value)
//         // console.log(move.value)
//         // console.log(arr)
//         arr.forEach(move=>{
//             // console.log(move)
//             let newNode= new Node(move)
//             moves.potentialMoves.push(newNode) 
//         })
//     }) 
// })
 
// console.log(testTree)  






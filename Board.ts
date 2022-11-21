import { Bishop } from "./SUB_Square/Bishop"
import { Empty } from "./SUB_Square/Empty"
import { Horse } from "./SUB_Square/Horse"
import { King } from "./SUB_Square/King"
import { Pawn } from "./SUB_Square/Pawn"
import { Queen } from "./SUB_Square/Queen"
import { Rook } from "./SUB_Square/Rook"
import { Square } from "./SUPER_Square/Square"

export class Board{

//Properties:
board:any[][]
//[x][y]
//Methoden
assemble():Square[][]{

this.board=[
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8]
]

let a,b:number=0

while(a<8){
    while(b<8){
        this.board[a][b]=new Empty('none')
        b=b+1
    }
    b=0
    a=a+1
}


//putting black royalty on board
this.board[0][0]=new Rook('black')
this.board[0][7]=new Rook('black')
this.board[0][1]=new Horse('black')
this.board[0][6]=new Horse('black')
this.board[0][2]=new Bishop('black')
this.board[0][5]=new Bishop('black')
this.board[0][3]=new Queen('black')
this.board[0][4]=new King('black')

//putting balck pawns

let n,m:number=0

while(n<8){
this.board[1][n]=new Pawn('black')
}


//putting white royalty on board
this.board[7][0]=new Rook('white')
this.board[7][7]=new Rook('white')
this.board[7][1]=new Horse('white')
this.board[7][6]=new Horse('white')
this.board[7][2]=new Bishop('white')
this.board[7][5]=new Bishop('white')
this.board[7][3]=new King('white')
this.board[7][4]=new Queen('white')

//putting white pawns

while(m<8){
    this.board[6][n]=new Pawn('white')
    }
    

return this.board


}

}
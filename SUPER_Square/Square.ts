import { Kind } from "../constants"
import { XPos } from "../constants"
import { YPos } from "../constants"
import { Color } from "../constants"

export class Square{

//Properties:
id:number
color:Color
kind:string

xPos:XPos
yPos:YPos

CanHit:string[]
CanWalk:String[]

constructor(color:Color){
    this.color=color
    
}

}
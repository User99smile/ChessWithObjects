import { Kind } from "../constants"
import { XPos } from "../constants"
import { YPos } from "../constants"
import { Color } from "../constants"
import { Square } from "../SUPER_Square/Square"

export class Rook extends Square{

kind:string=Rook.name

constructor(color:Color){
    super(color)
}


}
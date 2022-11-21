import { Kind } from "../constants"
import { XPos } from "../constants"
import { YPos } from "../constants"
import { Color } from "../constants"
import { Square } from "../SUPER_Square/Square"

export class Queen extends Square{

kind:string=Queen.name

constructor(color:Color){
    super(color)
}


}
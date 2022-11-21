import { Kind } from "../constants"
import { XPos } from "../constants"
import { YPos } from "../constants"
import { Color } from "../constants"
import { Square } from "../SUPER_Square/Square"

export class Horse extends Square{

kind:string=Horse.name

constructor(color:Color){
    super(color)
}


}
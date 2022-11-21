import { Kind } from "../constants"
import { XPos } from "../constants"
import { YPos } from "../constants"
import { Color } from "../constants"
import { Square } from "../SUPER_Square/Square"

export class Empty extends Square{

kind:string=Empty.name

constructor(color:Color){
    super(color)
}


}
import { validation } from "./validation/validation";
import CONF from "./conf.json"
import ordering from "./ordering/ordering";
import canvas from "./canvaBuilder/canva";
import DNAbuilder from "./dnaBuldier/dna";
import Draw from "./features_draw/draw";

export default function DrawingTracesTool({
    idDrawPlace,
    idCanvas,
    dnaFeatures_data,
    draw_name="draw",
    auto_adjust=false, 
    covered=false,
    covered_LeftPosition,
    covered_RightPosition
}) {
    if(!dnaFeatures_data || !idDrawPlace || !idCanvas){
        return null
    }
    dnaFeatures_data = validation({
        idCanvas: idCanvas,
        dnaFeatures_data: dnaFeatures_data,
        covered: covered,
        covered_LeftPosition: covered_LeftPosition,
        covered_RightPosition: covered_RightPosition
    })
    dnaFeatures_data = ordering(dnaFeatures_data)
    if(!dnaFeatures_data){
        return null
    }
    const CANVAS = canvas(idDrawPlace,idCanvas,dnaFeatures_data,CONF,auto_adjust)
    if(!CANVAS){
        console.error("build canvas error")
        return null
    }
    const DNA = DNAbuilder(CANVAS,dnaFeatures_data,CONF)
    if(!DNA){
        console.error("build draw dna error")
        return null
    }
    Draw(CANVAS,DNA,dnaFeatures_data,CONF,idCanvas)
    //overlaping(dnaFeatures_data,CONF)
}
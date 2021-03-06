import { stroke_define, font_define, rgb_to_rgbFormat, opacity_define } from "../validation/v_draw"
import DrawGene from "./features/gene";
import DrawPromoter from "./features/promoter";
import overlaping from "./overlaping/overlaping";
import DrawTFBindingSite from "./features/tf_binding_site";
import DrawTerminador from "./features/terminator";

export default function Draw(CANVAS, DNA, dnaFeatures_data = [], CONF, idCanvas) {
    if (!CANVAS || !dnaFeatures_data || !CONF || dnaFeatures_data === []) {
        console.error(
            `Some elements remain to be defined: \n
            CANVAS: ${CANVAS} \n
            Feature Data: ${dnaFeatures_data} \n
            DNA_CONF: ${CONF}
            `
        )
        return null;
    }

    let drawFeatures = []

    dnaFeatures_data.map(feature => {
        let draw
        if (feature?.objectType === "dna") {
            return null
        }
        let id = `${feature?._id}#${idCanvas}`
        //console.log(feature)
        switch (feature?.objectType) {
            case "dna":
                break;
            case "gene":
                draw = DrawGene({
                    id: id,
                    canvas: CANVAS,
                    dna: DNA,
                    anchor: feature?.anchor,
                    leftEndPosition: feature?.leftEndPosition,
                    rightEndPosition: feature?.rightEndPosition,
                    strand: feature?.strand,
                    labelName: feature?.labelName,
                    stroke: stroke_define(feature),
                    font: font_define(feature),
                    color: rgb_to_rgbFormat(feature?.objectRGBColor),
                    tooltip: feature?.tooltip,
                    separation: feature.separation,
                    opacity: opacity_define(feature),
                    conf: CONF?.gene
                });
                break;
            case "promoter":
                draw = DrawPromoter({
                    id: id,
                    canva: CANVAS,
                    dna: DNA,
                    anchor: feature?.anchor,
                    leftEndPosition: feature?.leftEndPosition,
                    rightEndPosition: feature?.rightEndPosition,
                    strand: feature?.strand,
                    labelName: feature?.labelName,
                    stroke: stroke_define(feature),
                    font: font_define(feature),
                    color: rgb_to_rgbFormat(feature?.objectRGBColor),
                    tooltip: feature?.tooltip,
                    separation: CONF.gene.height,
                    opacity: opacity_define(feature),
                    conf: CONF?.promoter
                })
                break;
            case "tf_binding_site":
                draw = DrawTFBindingSite({
                    id: id,
                    canvas: CANVAS,
                    dna: DNA,
                    anchor: feature?.anchor,
                    leftEndPosition: feature?.leftEndPosition,
                    rightEndPosition: feature?.rightEndPosition,
                    strand: feature?.strand,
                    labelName: feature?.labelName,
                    stroke: stroke_define(feature),
                    font: font_define(feature),
                    color: rgb_to_rgbFormat(feature?.objectRGBColor),
                    tooltip: feature?.tooltip,
                    separation: feature.separation,
                    opacity: opacity_define(feature),
                    conf: CONF?.tf_binding_site
                });
                break;
            case "terminator":
                draw = DrawTerminador({
                    id: id,
                    canvas: CANVAS,
                    dna: DNA,
                    anchor: feature?.anchor,
                    leftEndPosition: feature?.leftEndPosition,
                    rightEndPosition: feature?.rightEndPosition,
                    strand: feature?.strand,
                    labelName: feature?.labelName,
                    stroke: stroke_define(feature),
                    font: font_define(feature),
                    color: rgb_to_rgbFormat(feature?.objectRGBColor),
                    tooltip: feature?.tooltip,
                    separation: feature.separation,
                    opacity: opacity_define(feature),
                    conf: CONF?.gene
                });
                break;
            default:
                console.warn(`this feature "${feature?.objectType}" no drawing process`)
                break;
        }
        //console.log(draw)
        if(!draw){
            return null
        }
        drawFeatures.push(draw)
        overlaping(draw, drawFeatures, CONF)
        return null
    })
    //console.log(drawFeatures)
}
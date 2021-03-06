//Draw Sites v 0.10.0
/**
 * Falta etiqueta
 */
import { stroke_validate, font_validate, color_validate } from "../../validation/v_draw";
import { label } from "./label";

export default function DrawTFBindingSite({
    id,
    canvas,
    anchor,
    dna,
    separation = 0,
    leftEndPosition = 0,
    rightEndPosition = 10,
    labelName = "Name",
    strand = "forward",
    color = "#fff",
    opacity = 0.8,
    stroke,
    font,
    tooltip = "",
    conf,
    features
}) {
    if (!canvas || !dna || !id | (leftEndPosition > rightEndPosition)) {
        return null;
    }
    stroke = stroke_validate(stroke, conf.stroke);
    font = font_validate(font, conf.font);
    color = color_validate(color, "#00FFFF");
    // anchor effect
    if (anchor) {
        leftEndPosition = anchor.leftEndPosition;
        rightEndPosition = leftEndPosition;
        try {
            let anchorFeature = features.find(e => e._id === anchor._id)
            separation = anchorFeature.height
        } catch (error) {
            separation = 50
        }
    }
    //atributos
    const dnaX = dna.x,
        size = rightEndPosition - leftEndPosition,
        dnaY = dna.y,
        widthActive = dna.widthActive,
        dnaSize = dna.size,
        x = ((leftEndPosition - dna.leftEndPosition) * widthActive) / dnaSize;
    let sizeP = (size * widthActive) / dnaSize;
    if (sizeP < 1) {
        sizeP = 4
    }
    // scale
    const proportion = conf.height / 20;
    //atributos de cuerpo
    let tfH = 20 * proportion;
    let tfW = sizeP;
    let posX = x + dnaX;
    let posY = dnaY - separation - tfH;
    // draw site
    let tf_binding = canvas.rect(tfW, tfH);
    tf_binding.move(posX, posY).stroke(stroke).fill(color).opacity(opacity);
    //Text properties
    const textP = label({
        canvas: canvas,
        element_h: tfH,
        element_w: tfW,
        element_x: posX,
        element_y: posY,
        font: font,
        text: labelName
    })
    let sel = canvas.rect(font.size*labelName.length, tfH-5).move(textP.x(), textP.y()).fill("none").id(id+"/s");
    //group
    const group = canvas.group();
    group.id(id)
    group.add(tf_binding);
    group.add(textP);
    group.add(sel);
    //strand effect
    if (strand === "reverse") {
        posY = dnaY + separation;
        group.move(posX, posY);
    }
    group.attr({
        "data-tip": "",
        "data-for": `${canvas.node?.id}-${id}`
    });

    return {
        id: id,
        canvas: canvas,
        draw: group,
        posX: posX,
        posY: posY,
        sizeP: sizeP,
        height: tfH,
        dna: dna,
        separation: separation,
        leftEndPosition: leftEndPosition,
        rightEndPosition: rightEndPosition,
        labelName: labelName,
        strand: strand,
        color: color,
        opacity: color,
        stroke: stroke,
        font: font,
        objectType: "tf_binding_site",
        tooltip: tooltip
    };
}

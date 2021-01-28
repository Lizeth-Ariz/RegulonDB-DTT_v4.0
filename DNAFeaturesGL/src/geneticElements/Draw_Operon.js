//DrawOperon v 0.10.0
/**
 *falta agregar la funcion para mostrar el corte del elemento
 *  falta etiqueta
 */
import { stroke_validate, font_validate, color_validate } from "./validation";

export default function DrawOperon({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  leftEndPosition = 0,
  rightEndPosition = 20,
  labelName = "operonName",
  strand = "forward",
  color = "aqua",
  opacity = 1,
  stroke,
  font,
  tooltip = ""
}) {
  if (!canva || !dna || !id || leftEndPosition > rightEndPosition) {
    return null;
  }
  stroke = stroke_validate(stroke);
  font = font_validate(font);
  color = color_validate(color, "#00FFFF");
  //anchor
  if (anchor) {
    leftEndPosition = anchor.leftEndPosition;
    rightEndPosition = leftEndPosition + 10;
  }
  //atributos
  const dnaX = dna.x,
    size = rightEndPosition - leftEndPosition,
    dnaY = dna.y,
    widthActive = dna.widthActive,
    dnaSize = dna.size,
    x = ((leftEndPosition - dna.leftEndPosition) * widthActive) / dnaSize;
  let sizeP = (size * widthActive) / dnaSize;
  // scale
  let heigthActive = dna.forwardActive;
  if (strand === "reverse") {
    heigthActive = dna.reverseActive;
  }
  const proportion = heigthActive * 0.1;
  //atributos de cuerpo
  const operonH = proportion;
  const rowW = () => {
    if (heigthActive * 0.5 > sizeP) {
      return sizeP * 0.1;
    }
    return heigthActive * 0.1;
  };
  const lx1 = sizeP + dnaX + x;
  const ly1 = operonH;
  const lx2 = sizeP + dnaX - rowW() + x;
  let posX = x + dnaX;
  let posY = dnaY - separation - operonH;
  //Draw operon
  const operon = canva.path(
    " m " +
      (x + dnaX) +
      "," +
      operonH / 2 +
      " v " +
      operonH +
      " h " +
      (sizeP - rowW()) +
      " L " +
      lx1 +
      "," +
      ly1 +
      " " +
      lx2 +
      "," +
      operonH / 2 +
      " z"
  );
  operon.move(posX, posY);
  operon.id(id);
  operon.fill(color);
  operon.stroke(stroke);
  operon.opacity(opacity);
  // reverse effect
  if (strand === "reverse") {
    if (anchor) {
      posX = x + dnaX;
      posY = dnaY + separation;
    }
    operon.transform({
      rotate: 180,
      translateY: operonH
    });
    //posY = operonH * 2 + posY;
  }
  //return
  return {
    id: id,
    canva: canva,
    draw: operon,
    posX: posX,
    posY: posY,
    sizeP: sizeP,
    heigth: operonH,
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
    objectType: "operon",
    tooltip: tooltip
  };
}

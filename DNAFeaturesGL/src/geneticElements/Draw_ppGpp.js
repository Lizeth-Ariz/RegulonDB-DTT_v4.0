//DrawPpGpp v 0.10.0
/**
 *falta agregar la funcion para mostrar el corte del elemento
 * Agregar opaciodad, Texto se sale de su sitio
 * falta etiqueta
 */
import { stroke_validate, font_validate, color_validate } from "./validation";

export default function DrawPpGpp({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  leftEndPosition = 0,
  rightEndPosition = 10,
  labelName = "ppGpp",
  strand = "forward",
  color = "#AFAFAF",
  opacity = 1,
  stroke,
  font,
  tooltip = ""
}) {
  if (!canva || !dna || !id | (leftEndPosition > rightEndPosition)) {
    return null;
  }
  stroke = stroke_validate(stroke);
  font = font_validate(font);
  color = color_validate(color, "#AFAFAF");
  // anchor
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
  const proportion = heigthActive * 0.2;
  //atributos de cuerpo
  let ppGppH = proportion / 2;
  let ppGppW = sizeP;
  let dksAX = 0;
  let posX = x + dnaX;
  let posY = dnaY - separation - ppGppH;
  if (labelName === "DksA-ppGpp") {
    ppGppW = sizeP / 2;
    dksAX = posX;
    posX += ppGppW;
  }
  //Draw
  const ppGpp = canva.ellipse(ppGppW, ppGppH);
  ppGpp.move(posX, posY).stroke(stroke).fill(color);
  const group = canva.group();
  group.add(ppGpp);
  const textP = canva.text("ppGpp");
  textP
    .font({
      family: "Arial",
      size: proportion / 5,
      separation: "middle"
    })
    .move(posX + ppGppW / 2, posY + proportion / 7);
  group.add(textP);
  //DksA effect
  if (labelName === "DksA-ppGpp") {
    const dksA = canva.ellipse(ppGppW, ppGppH);
    dksA.move(dksAX, posY).stroke(stroke).fill(color);
    const textD = canva.text("DksA");
    textD
      .font({
        family: "Arial",
        size: proportion / 4,
        separation: "middle"
      })
      .move(dksAX + ppGppW / 2, posY + proportion / 7);
    group.add(dksA);
    group.add(textD);
  }
  //strand effect
  if (strand === "reverse") {
    posY = dnaY + separation;
    if (labelName === "DksA-ppGpp") {
      group.move(dksAX, posY);
    } else {
      group.move(posX, posY);
    }
  }
  return {
    id: id,
    canva: canva,
    posX: posX,
    posY: posY,
    sizeP: sizeP,
    heigth: ppGppH,
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
    objectType: "ppGpp",
    tooltip: tooltip
  };
}

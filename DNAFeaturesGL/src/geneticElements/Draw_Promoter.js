// Promoter 0.10.0
/**
 *falta etiqueta
 */
import { stroke_validate, font_validate, color_validate } from "./validation";

export default function DrawPromoter({
  id,
  canva,
  anchor,
  dna,
  separation = 20,
  leftEndPosition = 10,
  rightEndPosition = 50,
  labelName = "Name",
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
  // atributos
  const dnaX = dna.x,
    dnaY = dna.y,
    size = rightEndPosition - leftEndPosition,
    widthActive = dna.widthActive,
    dnaSize = dna.size,
    x = ((leftEndPosition - dna.leftEndPosition) * widthActive) / dnaSize;
  let sizeP = (size * widthActive) / dnaSize;
  //scale
  let heigthActive = dna.forwardActive;
  if (strand === "reverse") {
    heigthActive = dna.reverseActive;
  }
  const proportion = heigthActive * 0.1;
  //atributos de Cuerpo
  const bodyH = proportion;
  let bodyW = proportion + separation + 50;
  let px = x + dnaX;
  let py = dnaY - bodyW;

  //atributos de Cabeza
  let headH = proportion;
  let ax = x + dnaX + bodyH - 4;
  let ay = dnaY - bodyW - 5;

  let PromH = bodyH + headH;
  let posX = x;
  let posY = ay;
  // draw body
  const body = canva.path("M 0 0 V " + -bodyW + "H " + bodyH + "v");
  body.fill("none").move(px, py);
  body.stroke(stroke);
  // draw arrow
  var arrow = canva.path("m 0,0 5,5 -5,5 v 0");
  arrow.fill("none").move(ax, ay);
  arrow.stroke(stroke);
  //anchor effect
  if (anchor) {
    posX = anchor.posX;
    posY = anchor.posY - separation - anchor.heigth;
    if (anchor.strand === "reverse") {
      posX = anchor.posX;
      posY = anchor.posY + anchor.heigth + separation;
    }
  }
  // reverse effect
  if (strand === "reverse") {
    var group = canva.group();
    group.add(body);
    group.add(arrow);
    group.transform({
      rotate: 180,
      translateX: -bodyH,
      translateY: bodyW + 5
    });
  }
  return {
    id: id,
    canva: canva,
    sizeP: sizeP,
    draw: group,
    posX: posX,
    posY: posY,
    heigth: PromH,
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
    objectType: "promoter",
    tooltip: tooltip
  };
}

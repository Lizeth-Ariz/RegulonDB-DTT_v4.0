// Terminador 0.10.0
/**
 * Falta testear
 * head de la figura se sale de posicion
 */
import { stroke_validate, font_validate, color_validate } from "./validation";
export default function DrawTerminador({
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
  color = color_validate(color, "#000000");
  if (anchor) {
    leftEndPosition = anchor.leftEndPosition;
    rightEndPosition = leftEndPosition + 1;
    strand = anchor.strand;
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
  let bodyHeigth = proportion * 3 + separation;
  let bodyFootH = proportion / 4;
  let bodyFootW = 0;
  if (sizeP >= proportion) {
    bodyFootW = sizeP / 2 - proportion / 3;
  }

  let posX = x + dnaX;
  let posY = dnaY - bodyHeigth - bodyFootH;
  //atributos de Cabeza
  let headH = proportion;
  let terminadorH = bodyHeigth + headH;
  let headSacale = () => {
    return (proportion * 33) / 25 / 33;
  };
  let headWidth = () => {
    return 35 - ((25 - proportion) * 8) / 10;
  };
  let headHeigth = () => {
    return 35 - ((25 - proportion) * 8) / 10;
  };
  // dibujo de  BODY
  const body = canva.path(
    "M 0,0 v " +
      bodyHeigth +
      " h -" +
      bodyFootW +
      " v " +
      bodyFootH +
      " h " +
      sizeP +
      " v -" +
      bodyFootH +
      " h -" +
      bodyFootW +
      " v " +
      -bodyHeigth
  );
  body.fill(color).move(posX, posY);
  body.stroke(stroke);
  body.opacity(opacity);
  // dibujo de HEAD
  var head = canva.path(
    "M 23.2 28 L 23.2 27.1 A 14.7 14.7 0 0 0 30 14.7 A 14.7 14.7 0 0 0 15.2 0 L 15.2 0 A 14.7 14.7 0 0 0 0.5 14.7 A 14.7 14.7 0 0 0 7.2 27.1 L 7.2 28"
  );
  let headX = dnaX + x + sizeP / 2 - headWidth() / 2;
  let headY = dnaY - bodyHeigth - headHeigth();
  head.move(headX, headY);
  head.transform({
    scale: headSacale()
  });
  head.fill(color);
  head.stroke(stroke);
  head.opacity(opacity);

  // reverse effect
  if (strand === "reverse") {
    var group = canva.group();
    group.add(body);
    group.add(head);
    group.move(dnaX + x, dnaY);
    group.transform({
      rotate: 180
    });
  }
  return {
    id: id,
    canva: canva,
    draw: group,
    posX: posX,
    posY: posY,
    sizeP: sizeP,
    heigth: terminadorH,
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
    objectType: "terminator",
    tooltip: tooltip
  };
}

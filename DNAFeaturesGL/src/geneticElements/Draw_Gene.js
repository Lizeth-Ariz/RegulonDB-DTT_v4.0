//DrawGene v 0.10.0
/**
 * falta agregar la funcion para mostrar el corte del elemento,
 * falta etiqueta
 */
import { stroke_validate, font_validate, color_validate } from "./validation";
export default function DrawGene({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  leftEndPosition = 0,
  rightEndPosition = 20,
  labelName = "geneName",
  strand = "forward",
  color = "aqua",
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
  const geneH = proportion;
  const rowW = () => {
    if (heigthActive * 0.1 > sizeP) {
      return geneH * 0.3;
    }
    return heigthActive * 0.1;
  };
  const lx1 = sizeP + dnaX + x;
  const ly1 = geneH;
  const lx2 = sizeP + dnaX - rowW() + x;
  const ly2 = 0;
  let posX = x + dnaX;
  let posY = dnaY - separation - geneH * 2;
  //Draw Gene
  const gene = canva.path(
    "m " +
      (x + dnaX) +
      "," +
      geneH / 2 +
      " v " +
      geneH +
      " h " +
      (sizeP - rowW()) +
      " v " +
      geneH / 2 +
      " L " +
      lx1 +
      "," +
      ly1 +
      " " +
      lx2 +
      "," +
      ly2 +
      " v " +
      geneH / 2 +
      " z"
  );
  gene.move(posX, posY);
  gene.id(id);
  gene.fill(color);
  gene.stroke(stroke);
  gene.opacity(opacity);

  // reverse effect
  if (strand === "reverse") {
    if (anchor) {
      posX = x;
      posY = dnaY + separation;
    }
    gene.transform({
      rotate: 180,
      translateY: geneH * 2
    });
    posY = geneH * 2 + posY;
  }
  //tooltip info
  //data-tip='=( •̀‿•́)' data-for='svgTooltip2'
  gene.attr({
    "data-tip": "",
    "data-for": `${canva.node?.id}-${id}`
  });

  return {
    id: id,
    canva: canva,
    draw: gene,
    posX: posX,
    posY: posY,
    sizeP: sizeP,
    heigth: geneH,
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
    objectType: "gene",
    tooltip: tooltip
  };
}

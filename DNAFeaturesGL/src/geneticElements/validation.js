import { Color } from "@svgdotjs/svg.js";

export function stroke_validate(stroke) {
  const strokeDefault = { color: "#000", width: 1, linecap: "round" };
  try {
    stroke.color = color_validate(stroke?.color);
    if (!stroke?.width) {
      stroke.width = strokeDefault.width;
    }
    if (!stroke?.linecap) {
      stroke.linecap = strokeDefault.linecap;
    }
    return stroke;
  } catch (e) {
    return strokeDefault;
  }
}

export function font_validate(font) {
  const fontDefult = {
    family: "Arial",
    size: 12,
    separation: "middle",
    fill: "#000"
  };
  try {
    font.fill = color_validate(font?.fill);
    if (!font?.family) {
      font.family = fontDefult.family;
    }
    if (!font?.size) {
      font.size = fontDefult.size;
    }
    if (!font?.separation) {
      font.separation = fontDefult.separation;
    }
    return font;
  } catch (e) {
    return fontDefult;
  }
}

export function color_validate(color, defColor = "#000") {
  try {
    color = new Color(color);
  } catch (e) {
    color = new Color(defColor);
  }
  return color;
}

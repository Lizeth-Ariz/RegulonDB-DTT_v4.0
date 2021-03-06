import { SVG } from "@svgdotjs/svg.js";

export default function canvas(idDrawPlace, idCanvas, dnaFeatures_data, CONF, autoAdjust) {
    let canvas = undefined
    try {
        const DRAW_PLACE = document.getElementById(idDrawPlace);
        if (!DRAW_PLACE) {
            console.error("no DrawPlace")
            return null
        }
        DRAW_PLACE.innerHTML = "";
        let width = 0;
        let height = heightEstimates();
        //console.log(height)
        if (autoAdjust) {
            width = DRAW_PLACE.clientWidth;
        } else {
            width = widthEstimates();
        }
        canvas = SVG()
            .addTo(`#${idDrawPlace}`)
            .width(width)
            .height(height)
            .id(idCanvas);
        canvas.rect(width,height).fill(CONF.canvas.backgroundColor)
    } catch (error) {
        console.error(error)
    }

    function widthEstimates() {
        const DNA = dnaFeatures_data.find(element => element.objectType === "dna")
        return DNA.rightEndPosition - DNA.leftEndPosition;
    }

    function heightEstimates() {
        let height = 350
        return height*2
    }

    return canvas
}
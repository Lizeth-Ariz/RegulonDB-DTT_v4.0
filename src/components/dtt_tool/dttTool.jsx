import React, { useEffect } from "react";
import DrawingTracesTool from "./drawingTracesTool/drawing_traces_tool";
import IconButton from "./drawingTracesTool/IconButton"
import { ReImg } from "reimg";

const DttTool = ({
    id = "version4",
    data_dtt
}) => {

    //const [_expand, set_expand] = useState(false)


    const _onZoomIN = () => {
        console.log("HOLA")
    };
    const _downloadPNG = () => {
        var svgElement = document.querySelector(`svg`);
        ReImg.fromSvg(svgElement).toCanvas(function (canvas) {
            var url = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "dttgraphic.png";
            link.href = url;
            link.click();
        });
    };

    const _downloadSVG = () => {
        const svg = document.getElementById(`divCanvas_dttv4Context${id}`)
            .innerHTML;
        const blob = new Blob([svg.toString()]);
        const element = document.createElement("a");
        element.download = "dttgraphic.svg";
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
    }
    useEffect(() => {
        let drawPlace = document.getElementById(`divCanvas_dttv4Context${id}`)
        if (drawPlace) {
            let dnaFeatures_data = data_dtt
            if (dnaFeatures_data) {
                DrawingTracesTool({
                    idDrawPlace: `divCanvas_dttv4Context${id}`,
                    idCanvas: `dttv4_Canva${id}`,
                    dnaFeatures_data: dnaFeatures_data,
                    auto_adjust: true,
                })
                drawPlace.scrollTo(0, 250)
            } else {
                console.error("dtt, no valid")
            }

        }
    }, [data_dtt, id])


    if (data_dtt) {
        return (
            <section>
                <div>
                    <IconButton
                        icon="add"
                        style={{
                            background: "#000",
                            float: "left",
                            marginRight: "1%"
                        }}
                        onClick={() => {
                            _onZoomIN();
                        }}
                    />
                    <IconButton
                        icon="remove"
                        style={{
                            background: "#000",
                            float: "left",
                            marginRight: "1%"
                        }}
                        onClick={() => {

                        }}
                    />
                    <button
                        style={{ background: "#72a7c7" }}
                        label="Save to PNG"
                        onClick={() => {
                            _downloadPNG();
                        }}
                    >Download PNG</button>
                    <button
                        style={{ background: "#72a7c7" }}
                        label="Save to SVG"
                        onClick={() => {
                            _downloadSVG();
                        }}
                    >Download SVG</button>
                </div>
                <div style={{ overflow: "auto", height: "200px", resize: "vertical" }} id={`divCanvas_dttv4Context${id}`}></div>
            </section>
        )
    }

    return <></>

};

export default DttTool;


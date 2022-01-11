import React, { useState, useEffect } from "react";
import DrawingTracesTool from "./drawingTracesTool/drawing_traces_tool";


const DttTool = ({
    id = "version4",
    data_dtt
}) => {

    const [_expand, set_expand] = useState(false)

    useEffect(() => {
        let drawPlace = document.getElementById(`divCanvas_dttv4Context${id}`)
        if (drawPlace) {
            let dnaFeatures_data =  data_dtt
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
    }, [data_dtt])


    if (data_dtt) {
        return (
            <div style={{ overflow: "auto", height: "200px", resize: "vertical" }} id={`divCanvas_dttv4Context${id}`} />
        )
    }

    return <></>

};

export default DttTool;


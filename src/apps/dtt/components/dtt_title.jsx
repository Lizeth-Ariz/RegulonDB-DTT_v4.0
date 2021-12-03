import React, { useState, useEffect } from 'react'
import { Cover } from "../../../components/ui-components/ui_components";


export const Title = () => {
    const [_state, set_state] = useState();
    const [_title, set_title] = useState("Drawing Traces Tool");

    useEffect(() => {
        const cover = document.getElementById("div_cover_dtt_01")
        if (cover) {
            cover.addEventListener('coverR', function (e) {
                //console.log(`state`, e.detail)
                if (e.detail.state) {
                    set_state(e.detail.state)
                }
                if (e.detail.title) {
                    set_title(e.detail.title)
                }
            }, false);
        }
    }, [])
    //console.log(_isInfo)
    return (
        <div id={"div_cover_dtt_01"}>
            <Cover id="component_cover_dtt_01" state={_state}>
                <h1 id="cover_dtt_01" style={{margin: "0px 0px 0px 0px"}} >{_title}</h1>
            </Cover>
        </div>
    )
}

export default Title

// eslint-disable-next-line no-unused-vars
function Conformations({_conformations = []}) {
    //console.log(_conformations)
    if(!_conformations || _conformations.length === 0){
        return null
    }
    try {
        _conformations = _conformations.map((value)=>{
            return value?.name
        }).join(", ")
    } catch (error) {
        return null
    }
    return(
        <>
        Conformations
        <h2 style={{margin: "0px 0px 0px 0px"}}  >{_conformations}</h2> 
        </>
    )
}
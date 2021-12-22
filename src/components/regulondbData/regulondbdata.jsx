import React, { useState } from 'react'
import GetGeneticElements from '../../webServices/getGenticInterval';
import Form from './form';

export function RegulonDBData() {
    const [_formData, set_formData] = useState();
    const [_data, set_data] = useState();
    console.log(_data)
    // ['"gene","promoter"']
    let objectType = "["
    if (_formData) {
        let el = _formData.geneticElement.map((element) => {
            return element
        })
        let list = el.map((s) => `"${s}"`).join(", ");
        //console.log(list)
        objectType += list += "]"
    }
    //console.log(objectType)
    return (
        <article>
            <br />
            <Form onGo={(data) => { set_formData(data) }} onReset={() => { set_formData(undefined) }} ></Form>
            {
                _formData &&
                <GetGeneticElements
                    leftEndPosition={_formData.posL}
                    rightEndPosition={_formData.posR}
                    strand={_formData.strand}
                    covered={_formData.covered}
                    objectType={objectType}
                    resoultsData={(data) => { set_data(data) }}
                />
            }
        </article>
    )
}
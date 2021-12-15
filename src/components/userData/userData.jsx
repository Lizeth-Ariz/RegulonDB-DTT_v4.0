/**

# Component (deployment use)

# Form (regulonDB dtt)
	
## Description  
	
Is a user interface where the user can load a document to graph the genetic elements contained in the document.

## Category   
	
[Visual]  

## Live demo 
[-]

## Installation 
[-]

## Usage 

'''
  import {UserData} from "./components/userData/userData"
  //on implement ReactElement
  <UserData></UserData> 
'''
## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

## License

MIT License

## Author 
	
RegulonDB Team: 
[
  Lizeth Arizmendi Zagal    <liz.arizmendi13@gmail.com>
  Gabriel Alarcon Carranza  <galarcon@ccg.unam.mx>
]

# Component (development use)

## Component Type 

[HOC]

[stateful -> exportan funcion con estate y props, 
  stateless -> exportan funcion con props y sin state , 
  pure -> exporta una funcion sin props sin state, 
  HOC -> exporta una Funcion copuesta, o clase , 
  Hook -> exporta hook (react const) ]

## Dependencies

import React, { useState } from "react";
import { Form } from "./form";
import DttGraphic from "../dttGraphic/DttGraphic";

## States
	
| Property    | Value |          Desctiption           |
| --------    | ----- | -----------------------------  |
| _dttData    | String|  Updates state of the textarea |
| _valueText  | String|  Updates state of the textarea |


# Functions description

## [name]

__Description:__  


__Usage:__

__Scope: __

[Scope details]

__Input Parameter:__  
​__event:__ [Description]

__Return:__  
​__Void:__ []
​[Description (if necessary)]
 * 
 */

import React, { useState } from "react";
import { Form } from "./form";
/*import DttGraphic from "../dttGraphic/DttGraphic";
{_dttData ? (
  <DttGraphic id_canvas={"0120"} dnaFeatures_data={_dttData} />
) : (
  <></>
)}
*/
export function UserData() {
  const [_dttData, set_dttData] = useState();
  const [_valueText, set_valueText] = useState("");
  return (
    <div>
      <Form
        valueText={_valueText}
        onSumit={(dttData, valueText) => {
          set_valueText(valueText);
          set_dttData(dttData);
        }}
        onReset={(dttData, valueText) => {
          set_valueText("");
          set_dttData();
        }}
      />
    </div>
  );
}

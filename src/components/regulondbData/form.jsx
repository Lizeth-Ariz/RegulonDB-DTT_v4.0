/*

# Component (user guide)

# [Component name]
	
## Description  
	
[Description Details]

## Category   
	
[Visual, Structural]  

## Live demo 
	
[code to iframe CodeSandbox]


## Installation 

[example: npm install --save react-awesome-button]

## Usage 
	
[example: <protvista-tooltip>  </protvista-tooltip> ]

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
[full developer name]




# Component (technical guide)

## Component Type 

[stateful, stateless, pure, HOC, Hook]

## Dependencies

[Dependencies details]

## States
	
| Property | Value | Desctiption |
| -------- | ----- | ----------- |
|          |       |             |
	

# Functions description

Return:__  
​__[Type]:__ [Name]
​[Description (if necessary)]
## [function name]

__Description:__  

[Description of the function]


__Usage:__

```javascript
&function(Parameters, if any);
```

__Scope: __

[Scope details]

__Input Parameter:__  
​__[Name]:__ [Description]
__[Name]:__ [Description]


__


*/

import { useState, useEffect } from "react";

const elementData = [
  { name: "gene" },
  { name: "promoter" },
  { name: "operon" },
  { name: "tf binding site" },
  { name: "rna" },
  { name: "riboswitch" },
  { name: "traslational attenuattor" },
  { name: "trascriptional attenuattor" },
  { name: "ppGpp" }
];

export default function Form({
  onGo = () => {},
  onReset = () => {},
  minbp = 1,
  maxbp = 4639676
}) {
  function setValues() {
    let posL = document.getElementById("posL").value;
    let posR = document.getElementById("posR").value;
    let strand = document.querySelector('input[name="strand"]:checked').value;
    let covered = document.getElementById("covered").checked;
    let geneticElement = [];
    elements.map((e) => {
      if (e.isChecked) {
        geneticElement.push(e.name);
      }
      return "";
    });
    if (posL > posR) {
      alert("Left position has to be smaller than right position.");
      return undefined;
    }
    if (geneticElement.length < 1) {
      alert("No genetic element selected for viewing");
      return undefined;
    }
    let response = {
      posL: posL,
      posR: posR,
      strand: strand,
      covered: covered,
      geneticElement: geneticElement
    };
    return response;
  }

  const [elements, setElements] = useState([]);
  //const [checked, setChecked] = useState(true);

  useEffect(() => {
    setElements(elementData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "checkAll") {
      let tempElement = elements.map((element) => {
        return { ...element, isChecked: checked };
      });
      setElements(tempElement);
    } else {
      let tempUser = elements.map((element) =>
        element.name === name ? { ...element, isChecked: checked } : element
      );
      setElements(tempUser);
    }
  };

  const resetInput = (e) => {
    document.getElementById("posL").value = "";
    document.getElementById("posR").value = "";
    document.getElementById("both").checked = true;
  };

  return (
    <div>
      <label>
        Absolute genome left position:
        <input id="posL" type="number" min={minbp} max={maxbp} />
        (1-4639676)
      </label>
      <br />
      <label>
        Absolute genome rigth position:
        <input id="posR" type="number" min={minbp} max={maxbp} />
        (1-4639676)
      </label>
      <br />
      <label>Strand:</label>
      <br />
      <fieldset>
        <input type="radio" name="strand" value="forward" onChange={() => {}} />
        <label>forward</label>
        <input type="radio" name="strand" value="reverse" onChange={() => {}} />
        <label>reverse</label>
        <input
          id="both"
          type="radio"
          name="strand"
          value="both"
          defaultChecked={true}
          onChange={() => {}}
        />
        <label>both</label>
        <br />
      </fieldset>
      <label>Covered:</label>
      <br />
      <input
        id="covered"
        type="checkbox"
        defaultChecked={true}
        onChange={() => {}}
      />
      <label>
        (Draw only the elements that are completely contained in the selected
        range)
      </label>
      <br />

      <div>
        <input
          type="checkbox"
          name="checkAll"
          checked={!elements.some((element) => element?.isChecked !== true)}
          onChange={handleChange}
        />
        <label>All</label>
      </div>
      {elements.map((element, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={element.name}
            checked={element?.isChecked || false}
            onChange={handleChange}
          />
          <label>{element.name}</label>
        </div>
      ))}
      <button
        onClick={() => {
          onGo(setValues());
        }}
      >
        Go
      </button>
      <button
        className="accent"
        style={{ marginRight: "2%", marginLeft: "2%" }}
        onClick={() => {
          onReset(resetInput());
        }}
      >
        Reset
      </button>
      <button
        id="demo"
        onClick={(e) => {
          document.getElementById("posL").value = "2306972";
          document.getElementById("posR").value = "2311534";
        }}
      >
        Demo
      </button>
    </div>
  );
}

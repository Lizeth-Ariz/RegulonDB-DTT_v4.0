import React, {useState} from 'react'
import Title from './components/cover/title'
import { Tabs } from './components/tab/tabs';
import Form from './components/regulondbData/form';
import {UserData} from "./components/userData/userData"
import GetGeneticElements from './webServices/getGenticInterval';
import "./styleSheet_regulonDB.css"



const tabsInfo = [
    { id: "01", name: "RegulonDB-Data", disabled: false },
    { id: "02", name: "User Data", disabled: false }
  ];

  const tabs = [
    <div id="01">
      <RegulonDBData />
    </div>,
    <div id="02">
      <article>
        <br />
        <UserData></UserData> 
      </article>
    </div>
  ];

export default function DTT() {
    return (
        <div>
            <Title></Title>
            <Tabs tabSelect={"01"} tabsInfo={tabsInfo} tabs={tabs} />
        </div>
    )
}

function RegulonDBData(){
  const [_formData, set_formData] = useState();
  const [_data, set_data] = useState();
  console.log(_data)
  return(
    <article>
        <br />
        <Form onGo={(data)=>{set_formData(data)}} onReset={()=>{set_formData(undefined)}} ></Form>
        {
          _formData &&
          <GetGeneticElements
          leftEndPosition={_formData.posL}
          rightEndPosition={_formData.posR}
          strand={_formData.strand}    
          covered={_formData.covered}     
          objectType={_formData.geneticElement} 
          resoultsData={(data)=>{set_data(data)}}
        />
        }
      </article>
  )
}
/** <GetGeneticElements
          leftEndPosition={}
        /> */
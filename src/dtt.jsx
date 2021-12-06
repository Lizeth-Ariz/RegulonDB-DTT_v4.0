import React from 'react'
import Title from './components/cover/title'
import { Tabs } from './components/tab/tabs';
import Form from './components/regulondbData/form';
import "./styleSheet_regulonDB.css"


const tabsInfo = [
    { id: "01", name: "RegulonDB-Data", disabled: false },
    { id: "02", name: "User Data", disabled: false }
  ];

  const tabs = [
    <div id="01">
      <article>
        <br />
        <Form></Form>
      </article>
    </div>,
    <div id="02">
      <article>
        <br />
        
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

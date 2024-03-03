import React, { createContext, useState } from "react";
import All from "./All.js";
import Portfolio from "./portfolio.js";
import Ecommerce from "./ecommerce.js";
const TabContext = createContext({ activeTab: 0 })
const ComponentA = () => {
  return (
    <All />
  );
};

const ComponentB = () => {
  return (
    <Ecommerce />
  );
};

const ComponentC = () => {
  return (
    <Portfolio />
  );
};
const Tabs = () => {
  //TODO:change button style :color,fontWeight,borderBottom inside handelchange()

  const [activeTab, setActiveTab] = useState(0)
  const handleTabChange = (index) => {
    setActiveTab(index);
  }
  return (
    <>
      <nav className="NaV">
        <button onClick={() => { handleTabChange(0); }}>All</button>
        <button onClick={() => { handleTabChange(1); }}>ecommerce</button>
        <button onClick={() => { handleTabChange(2); }}>portfolio</button>
      </nav>
      <div>
        {activeTab === 0 ? <ComponentA /> : null}
        {activeTab === 1 ? <ComponentB /> : null}
        {activeTab === 2 ? <ComponentC /> : null}
      </div>
    </>
  )
};
const Navigator = () => {
  return (
    <TabContext.Provider>
      <Tabs />
    </TabContext.Provider>
  )
}
export default Navigator

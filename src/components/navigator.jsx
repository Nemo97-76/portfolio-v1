import React, { createContext, useState } from "react";
import All from "./All.jsx";
import Portfolio from "./portfolio.jsx";
import Ecommerce from "./ecommerce.jsx";
import useLocalStorage from "use-local-storage";
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
  var [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem("activeTab");
    return saved ? parseInt(saved, 10) : 0;
  });
  const handleTabChange = (index) => {
    localStorage.setItem("activeTab", index);
    setActiveTab(index);
  };
  return (
    <>
      <nav className="NaV">
        <button className={activeTab === 0 ? "active" : ""} data-aos="fade-right" data-aos-delay="100" data-aos-duration="15000" onClick={() => { handleTabChange(0); }}>All</button>
        <button className={activeTab === 1 ? "active" : ""} data-aos="fade-right" data-aos-delay="200" data-aos-duration="15000" onClick={() => { handleTabChange(1); }}>ecommerce</button>
        <button className={activeTab === 2 ? "active" : ""} data-aos="fade-right" data-aos-delay="300" data-aos-duration="15000" onClick={() => { handleTabChange(2); }}>portfolio</button>
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

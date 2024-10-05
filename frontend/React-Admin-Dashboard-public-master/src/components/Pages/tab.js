import React from "react";
import "./tab.css"; // Create styles for tabs

const Tab = ({ tabs, selectedTab, onSelect }) => {
  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${selectedTab === tab.id ? "active" : ""}`}
          onClick={() => onSelect(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;

import React from "react";

const AgentList = () => {
  return (
    <div>
      <h1>{localStorage.getItem("fname")}</h1>
    </div>
  );
};

export default AgentList;

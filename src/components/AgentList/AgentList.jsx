import React from "react";
import "./AgentList.css";
const AgentList = ({ agents, deleteAgent, handleEdit, showEditModal }) => {
  console.log(agents, "getting");
  return (
    <div className="container">
      <div className="cardDetails">
        <h1>{agents[0]?.fname}</h1>
        <p>{agents[0]?.pnumber}</p>
        <p>{agents[0]?.email}</p>
        <p>{agents[0]?.realestate}</p>
      </div>
      <div style={{ flex: 1 }}>
        {agents?.map((agent, index) => {
          return (
            <div className="agentCard" key={index}>
              <div style={{ marginInline: "6.5em" }}>
                <p className="fname">{agent?.fname}</p>
                <p className="content">{agent?.pnumber}</p>
                <p className="content">{agent?.email}</p>
                <p className="content">{agent?.realestate}</p>
              </div>
              <div className="bttns">
                <button
                  onClick={() => {
                    handleEdit(agent);
                    showEditModal();
                  }}
                  className="delete"
                >
                  E
                </button>
                <button
                  className="delete"
                  onClick={() => deleteAgent(agent?.fname)}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentList;

import React, { useState } from "react";
import "./AgentList.css";
const AgentList = ({ agents, deleteAgent, handleEdit, showEditModal }) => {
  const [selectedID, setSelectedID] = useState();
  console.log(selectedID, "selecetdid");

  return (
    <div className="container">
      <div className="cardDetails">
        <h1>{agents[selectedID]?.fname || agents[0]?.fname}</h1>
        <p>{agents[selectedID]?.pnumber || agents[0]?.pnumber}</p>
        <p>{agents[selectedID]?.email || agents[0]?.email}</p>
        <p>{agents[selectedID]?.realestate || agents[0]?.realestate}</p>
      </div>
      <div style={{ flex: 1 }}>
        {agents?.map((agent, index) => {
          return (
            <div className="agentCard" key={index}>
              <img className="img" width="130" alt="img" src={agent?.photo} />
              <div>
                <p
                  onClick={() => {
                    setSelectedID(index);
                  }}
                  className="fname"
                >
                  {agent?.fname}
                </p>
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

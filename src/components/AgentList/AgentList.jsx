import React, { useState } from "react";
import "./AgentList.css";
import {
  EditFilled,
  DeleteOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { MdOutlineLocationOn } from "react-icons/md";
const AgentList = ({ agents, deleteAgent, handleEdit, showEditModal }) => {
  const [selectedID, setSelectedID] = useState();

  return (
    <div className="container">
      <div className="cardDetails">
        <h1 className="bigCard-name">
          {agents[selectedID]?.fname.toUpperCase() ||
            agents[0]?.fname.toUpperCase()}
        </h1>
        <p className="Realestate">Real Estate Agent</p>
        <article className="article">
          <img
            style={{ border: "1px solid white" }}
            width="350"
            height="367"
            src={agents[selectedID]?.photo || agents[0]?.photo}
            alt="img"
          />
          <div className="bigcard-footer">
            <p className="bigCard-content" style={{ paddingLeft: "1em" }}>
              <PhoneOutlined />
              {agents[selectedID]?.pnumber || agents[0]?.pnumber}
            </p>
            <p className="bigCard-content">
              <MailOutlined />
              {agents[selectedID]?.email || agents[0]?.email}
            </p>
            <p className="bigCard-content">
              <MdOutlineLocationOn />

              {agents[selectedID]?.realestate || agents[0]?.realestate}
            </p>
          </div>
        </article>
      </div>
      <div style={{ flex: 1 }}>
        {agents?.map((agent, index) => {
          return (
            <div className="agentCard" key={index}>
              <img className="img" width="130" alt="img" src={agent?.photo} />
              <div style={{ textAlign: "start" }}>
                <p
                  onClick={() => {
                    setSelectedID(index);
                  }}
                  className="fname"
                >
                  {agent?.fname}
                </p>
                <p style={{ marginTop: "2em" }} className="content">
                  {agent?.pnumber}
                </p>
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
                  <EditFilled />
                </button>
                <button
                  className="delete"
                  onClick={() => deleteAgent(agent?.fname)}
                >
                  <DeleteOutlined />{" "}
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

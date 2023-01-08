import React, { useState } from "react";
import { Modal } from "antd";
const Edit = ({
  isEditModalVisible,
  agents,
  setAgents,
  agentOnEdit,
  setAgentOnEdit,
  cancelEdit,
  setIsEditModalVisible,
}) => {
  const onChangeName = (e) => {
    let copyObj = JSON.parse(JSON.stringify(agentOnEdit));
    setAgentOnEdit({ ...copyObj, fname: e.target.value });
  };
  const onChangeNumber = (e) => {
    let copyObj = JSON.parse(JSON.stringify(agentOnEdit));
    setAgentOnEdit({ ...copyObj, pnumber: e.target.value });
  };
  const onChangeEmail = (e) => {
    let copyObj = JSON.parse(JSON.stringify(agentOnEdit));
    setAgentOnEdit({ ...copyObj, email: e.target.value });
  };
  const onChangeRealestate = (e) => {
    let copyObj = JSON.parse(JSON.stringify(agentOnEdit));
    setAgentOnEdit({ ...copyObj, realestate: e.target.value });
  };
  const cancelEditt = () => {
    setAgentOnEdit(null);
    cancelEdit();
  };
  console.log(agentOnEdit, "agentOnEdit in edit component");

  const onSaveHandler = () => {
    let copyAgents = JSON.parse(JSON.stringify(agents));
    let foundAgentIndex = agents.findIndex(
      (agent) => agent.id === agentOnEdit.id
    );

    let finalData = copyAgents.splice(foundAgentIndex, 1, agentOnEdit);
    localStorage.setItem("agents", JSON.stringify(copyAgents));
    setIsEditModalVisible(false);
    setAgents(JSON.parse(localStorage.getItem("agents")));
  };

  return (
    <Modal open={isEditModalVisible} onCancel={cancelEditt}>
      <div className="modal-navbar">
        <h1 className="navbar-title">EDIT Agent</h1>
      </div>
      <div className="containerr">
        <div className="modal-forms">
          <label className="form-label">Full Name*</label>
          <br></br>
          <input
            required
            // defaultValue={agentOnEdit?.fname}
            value={agentOnEdit?.fname}
            placeholder="John Smith..."
            className="input-form"
            type="text"
            onChange={onChangeName}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Number*</label>
          <br></br>
          <input
            required
            value={agentOnEdit?.pnumber}
            placeholder="+35569xxxxxxx"
            className="input-form"
            type="number"
            onChange={onChangeNumber}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Email*</label>
          <br></br>
          <input
            value={agentOnEdit?.email}
            required
            placeholder="johnsmith@gmail.com"
            className="input-form"
            type="text"
            onChange={onChangeEmail}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Realestate</label>
          <br></br>
          <input
            value={agentOnEdit?.realestate}
            placeholder="Tirana Realestate"
            className="input-form"
            type="text"
            onChange={onChangeRealestate}
          ></input>
        </div>
        <br></br>
        <br></br>
        <button onClick={onSaveHandler} className="buttn">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default Edit;

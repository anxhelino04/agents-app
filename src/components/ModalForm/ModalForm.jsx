import React, { useRef, useState, useEffect } from "react";
import { Modal } from "antd";
import "./modal.css";
import AgentList from "../AgentList/AgentList";
const ModalForm = ({ isModalOpen, handleCancel, setIsModalOpen }) => {
  const [agents, setAgents] = useState([]);
  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [realestate, setRealestate] = useState("");
  // const fname = useRef();
  // const pnumber = useRef();
  // const email = useRef();
  // const realestate = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    let agent = {
      fname,
      pnumber,
      email,
      realestate,
    };
    setAgents([...agents, agent]);
    setFname("");
    setEmail("");
    setPnumber("");
    setRealestate("");
    setIsModalOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);
  return (
    <Modal open={isModalOpen} onCancel={handleCancel}>
      <div className="modal-navbar">
        <h1 className="navbar-title">ADD Agents</h1>
      </div>
      <div className="containerr">
        <div className="modal-forms">
          <label className="form-label">Full Name*</label>
          <br></br>
          <input
            required
            value={fname}
            placeholder="John Smith..."
            className="input-form"
            type="text"
            onChange={(e) => setFname(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Number*</label>
          <br></br>
          <input
            required
            value={pnumber}
            placeholder="+35569xxxxxxx"
            className="input-form"
            type="text"
            onChange={(e) => setPnumber(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Email*</label>
          <br></br>
          <input
            value={email}
            required
            placeholder="johnsmith@gmail.com"
            className="input-form"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div className="modal-forms">
          <label className="form-label">Realestate</label>
          <br></br>
          <input
            value={realestate}
            placeholder="Tirana Realestate"
            className="input-form"
            type="text"
            onChange={(e) => setRealestate(e.target.value)}
          ></input>
        </div>
        <br></br>
        <br></br>
        <button onClick={submitHandler} className="buttn">
          ADD
        </button>
      </div>
    </Modal>
  );
};

export default ModalForm;

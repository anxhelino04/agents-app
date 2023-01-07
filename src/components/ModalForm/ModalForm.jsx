import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./modal.css";
const ModalForm = ({
  isModalOpen,
  handleCancel,
  setIsModalOpen,
  setAgents,
  agents,
}) => {
  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [realestate, setRealestate] = useState("");
  const [fnamemsg, setFnamemsg] = useState("");
  const [pnumbermsg, setPnumbermsg] = useState("");
  const [emailmsg, setEmailmsg] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let agent = {
      fname,
      pnumber,
      email,
      realestate,
    };
    if (fname.length > 0 && pnumber.length > 0 && email.length > 0) {
      setAgents([...agents, agent]);
      setFname("");
      setEmail("");
      setPnumber("");
      setRealestate("");
      setIsModalOpen(false);
    }
    if (fname.length < 1) {
      setFnamemsg("*Full name is required");
    }
    if (pnumber.length < 1) {
      setPnumbermsg("*Number is required");
    }
    if (email.length < 1) {
      setEmailmsg("*Email is required");
    }
  };
  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);
  console.log(agents, "setting agents");

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
          <p className="msg">{fnamemsg}</p>
        </div>
        <div className="modal-forms">
          <label className="form-label">Number*</label>
          <br></br>
          <input
            required
            value={pnumber}
            placeholder="+35569xxxxxxx"
            className="input-form "
            type="number"
            onChange={(e) => setPnumber(e.target.value)}
          ></input>
          <p className="msg">{pnumbermsg}</p>
        </div>
        <div className="modal-forms">
          <label className="form-label">Email*</label>
          <br></br>
          <input
            value={email}
            required
            placeholder="johnsmith@gmail.com"
            className="input-form"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="msg">{emailmsg}</p>
        </div>
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

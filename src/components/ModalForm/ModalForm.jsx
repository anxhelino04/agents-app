import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./modal.css";
import { nanoid } from "nanoid";
import { UploadOutlined } from "@ant-design/icons";
const ModalForm = ({
  isModalOpen,
  handleCancel,
  setIsModalOpen,
  setAgents,
  agents,
  loading,
  setLoading,
}) => {
  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState();
  const [email, setEmail] = useState("");
  const [realestate, setRealestate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [fnamemsg, setFnamemsg] = useState("");
  const [pnumbermsg, setPnumbermsg] = useState("");
  const [emailmsg, setEmailmsg] = useState("");
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const HandleImage = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setPhoto(base64);
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let agent = {
      fname,
      pnumber,
      email,
      realestate,
      id: nanoid(6),
      photo: photo,
    };
    if (fname.length > 0 && pnumber.length > 0 && email.length > 0) {
      setAgents([...agents, agent]);
      setFname("");
      setEmail("");
      setPnumber("");
      setRealestate("");
      setPhoto(null);
      setIsModalOpen(false);
      setLoading(true);
    }
    if (fname?.length < 1) {
      setFnamemsg("*Full name is required");
    } else if (fname?.length > 0) {
      setFnamemsg("");
    }
    if (pnumber?.length < 1) {
      setPnumbermsg("*Number is required");
    } else if (pnumber?.length > 0) {
      setPnumbermsg("");
    }
    if (email?.length < 1) {
      setEmailmsg("*Email is required");
    } else if (email?.length) {
      setEmailmsg("");
    }
  };
  setTimeout(() => {
    setLoading(false);
  }, 2100);
  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);
  console.log(loading, "testing loadinggg");

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
        <div className="modal-forms">
          <label htmlFor="photoupload" className="upload">
            <UploadOutlined />
          </label>
          <h3 className="upload-text">Upload Photo</h3>
          <input
            style={{ display: "none", visibility: "hidden" }}
            type="file"
            id="photoupload"
            onChange={HandleImage}
          ></input>
        </div>
        <button onClick={submitHandler} className="buttn">
          ADD
        </button>
      </div>
    </Modal>
  );
};

export default ModalForm;

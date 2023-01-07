import React from "react";
import "./addbutton.css";
const AddButton = ({ showModal }) => {
  return (
    <div>
      <button onClick={showModal} className="addbutton">
        SHTO AGJENT
      </button>
    </div>
  );
};

export default AddButton;

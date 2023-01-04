import React, { useState } from "react";
import AgentList from "../AgentList/AgentList";
import AddButton from "../AddButton/AddButton";
import ModalForm from "../ModalForm/ModalForm";
import { useGlobalState } from "../state";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AgentList />
      <ModalForm
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleCancel={cancelModal}
      />
      <AddButton showModal={showModal} />
    </div>
  );
};

export default Home;

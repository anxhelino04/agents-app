import React, { useState } from "react";
import AgentList from "../AgentList/AgentList";
import AddButton from "../AddButton/AddButton";
import ModalForm from "../ModalForm/ModalForm";
import Edit from "../ModalForm/Edit";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agentOnEdit, setAgentOnEdit] = useState();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = () => {
    setIsEditModalVisible(true);
  };
  const deleteAgent = (fname) => {
    const filteredAgents = agents.filter((element, index) => {
      return element?.fname !== fname;
    });
    setAgents(filteredAgents);
  };
  const cancelModal = () => {
    setIsModalOpen(false);
  };

  const cancelEdit = () => {
    setIsEditModalVisible(false);
  };
  const handleEdit = (agent) => {
    setAgentOnEdit(agent);
    console.log(agent, "agentOnEdit when selected");
  };

  const getDatafromLs = () => {
    const data = localStorage.getItem("agents");
    if (data) {
      return JSON.parse(data);
    }
  };
  const [agents, setAgents] = useState(getDatafromLs() || []);
  const EditHandler = () => {};

  return (
    <div>
      <AgentList
        agents={agents}
        deleteAgent={deleteAgent}
        handleEdit={handleEdit}
        showEditModal={showEditModal}
      />
      <ModalForm
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleCancel={cancelModal}
        agents={agents}
        setAgents={setAgents}
      />
      <Edit
        isEditModalVisible={isEditModalVisible}
        agents={agents}
        setAgents={setAgents}
        cancelEdit={cancelEdit}
        agentOnEdit={agentOnEdit}
        setAgentOnEdit={setAgentOnEdit}
        EditHandler={EditHandler}
      />
      <AddButton showModal={showModal} />
    </div>
  );
};

export default Home;

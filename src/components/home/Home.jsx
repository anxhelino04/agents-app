import React, { useState } from "react";
import AgentList from "../AgentList/AgentList";
import AddButton from "../AddButton/AddButton";
import ModalForm from "../ModalForm/ModalForm";
import Edit from "../ModalForm/Edit";
import { Skeleton } from "antd";
import "../AddButton/addbutton.css";
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
    window.location.reload();
  };
  const cancelModal = () => {
    setIsModalOpen(false);
  };

  const cancelEdit = () => {
    setIsEditModalVisible(false);
  };

  const handleEdit = (agent) => {
    setAgentOnEdit(agent);
  };

  const getDatafromLs = () => {
    const data = localStorage.getItem("agents");
    if (data) {
      return JSON.parse(data);
    }
  };
  const [agents, setAgents] = useState(getDatafromLs() || []);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {!loading ? (
        <AgentList
          agents={agents}
          deleteAgent={deleteAgent}
          handleEdit={handleEdit}
          showEditModal={showEditModal}
        />
      ) : (
        <Skeleton active />
      )}
      <ModalForm
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleCancel={cancelModal}
        agents={agents}
        setAgents={setAgents}
        loading={loading}
        setLoading={setLoading}
      />
      <Edit
        isEditModalVisible={isEditModalVisible}
        agents={agents}
        setAgents={setAgents}
        cancelEdit={cancelEdit}
        agentOnEdit={agentOnEdit}
        setAgentOnEdit={setAgentOnEdit}
        setIsEditModalVisible={setIsEditModalVisible}
      />
      {!loading ? <AddButton showModal={showModal} /> : <Skeleton active />}
    </div>
  );
};

export default Home;

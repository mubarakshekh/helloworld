import { useState } from "react";

import "./App.css";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Layout from "./Layouts/Layout";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [userData, setUserData] = useState<Object>({});

  const setUserDetails = (user: Object) => {
    setUserData(user);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "scroll";
  };

  const modalData = {
    closeModal,
    ...userData,
  };

  return (
    <Layout>
      <Header />
      <Users setUserDetails={setUserDetails} />
      {isModalOpen && <Modal {...modalData} />}
    </Layout>
  );
}

export default App;

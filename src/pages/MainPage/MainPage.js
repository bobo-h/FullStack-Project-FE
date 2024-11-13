import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/main.style.css";
import { Modal} from "react-bootstrap";
import Button from "../../common/components/Button";
import ChatbotPage from "../ChatbotPage/ChatbotPage";

const MainPage = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

    
  const goToChatbotPage = () => {
    setShowModal(true);  
  };
  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const goToRegister = () => {
    navigate("/"); 
  };

  return (
    <div className="main-page">
      <h1>Welcome to the Main Page</h1>
      <div className="btn-area">
        <Button >Login Page</Button>
        <Button onClick={goToRegister}>Register Page</Button>
        <Button >My Page</Button>
        <Button onClick={goToChatbotPage}>Chatbot Page</Button>
        <Button >Diary Page</Button>
        <Button >Shop Page</Button>
      </div>

        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
            <ChatbotPage />
        </Modal>
    </div>


  );
};

export default MainPage;

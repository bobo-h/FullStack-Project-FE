import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/main.style.css";
import Button from "../../common/components/Button";

const MainPage = () => {
  const navigate = useNavigate();

  const goToChatbotPage = () => {
    navigate("/chatbot"); 
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
    </div>
  );
};

export default MainPage;

import React from "react";
import Button from "../../common/components/Button";
import "../../common/style/alert.style.css";
import { useNavigate } from "react-router-dom";


const Alert = ({ children, onClose, redirectTo }) => {

  const navigate = useNavigate();

  const handleConfirm = () => {
    onClose();
    navigate(redirectTo || "/");
  };

  return (
    <div className="alert">
      <div className="alert-overlay">
        <div className="alert-container">
          <button className="alert-close-button" onClick={handleConfirm}>X</button>
          <h4 className="alert-title">MeowMemo</h4>
          <div className="alert-content">{children}</div>
          <Button onClick={handleConfirm} className="alert-button">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Alert;

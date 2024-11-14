import React from "react";
import Button from "../../common/components/Button";
import "../../common/style/alert.style.css";

const Alert = ({ children, onClose }) => {
  return (
    <div className="alert">
      <div className="alert-overlay">
        <div className="alert-container">
          <button className="alert-close-button" onClick={onClose}>×</button>
          <h4 className="alert-title">프로젝트</h4>
          <div className="alert-content">{children}</div>
          <Button onClick={onClose} className="alert-button">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Alert;

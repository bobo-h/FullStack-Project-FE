import React, { useState} from "react";
import "./style/applayout.style.css";
import LodingSpinner from "../common/components/LodingSpinner";
import NavBar from "../common/components/NavBar";
import Alert from "../common/components/Alert";
import Alert2 from "../common/components/Alert2";

const AppLayout = ({ children }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false); // Alert 상태 추가
  const loging = true;

  const toggleAlert = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <div className="app-layout">
      <NavBar toggleAlert={toggleAlert} />
      {loging ? <LodingSpinner /> : { children }}
      {/* {isAlertVisible && (
        <Alert onClose={toggleAlert}>
          <p>여기 알림 메시지를 입력할 수 있습니다.</p>
        </Alert>
      )} */}
      {isAlertVisible && (
        <Alert2 onClose={toggleAlert}>
          <p>여기 알림 메시지를 입력할 수 있습니다.</p>
        </Alert2>
      )}
    </div>
  );
};

export default AppLayout;
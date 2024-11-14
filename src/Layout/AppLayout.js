import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style/applayout.style.css";
import LodingSpinner from "../common/components/LodingSpinner";
import NavBar from "../common/components/NavBar";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const loging = false;

  const toggleAlert = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  // 현재 경로가 /admin인지 확인
  const isAdminPage = location.pathname === "/admin";
  const isMyPage = location.pathname === "/my-page";

  // 경로가 /admin일 때 display: flex를 제거하려면 no-flex 클래스 추가
  const appLayoutClass = isAdminPage ? "no-flex" : "display-flex";

  return (
    <div className={`app-layout ${appLayoutClass}`}>
      {!isAdminPage && <NavBar toggleAlert={toggleAlert} />}
      {loging ? <LodingSpinner /> : children}
    </div>
  );
};

export default AppLayout;

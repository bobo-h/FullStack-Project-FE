import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/components/NavBar";
import "./style/applayout.style.css";
import LodingSpinner from "../common/components/LodingSpinner";

const AppLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {}, []);
  const loging = false;

  // 현재 경로가 /my-page인지 확인
  const isMyPage = location.pathname === "/my-page";
  // 경로가 /my-page일 때 display: flex를 제거하려면 no-flex 클래스 추가
  const appLayoutClass = isMyPage ? "no-flex" : "display-flex";

  return (
    <div className={`.app-layout ${appLayoutClass}`}>
      <NavBar />
      {loging ? <LodingSpinner /> : children}
    </div>
  );
};

export default AppLayout;

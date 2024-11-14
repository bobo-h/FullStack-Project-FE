import React, { useEffect } from "react";
import NavBar from "../common/components/NavBar";
import "./style/applayout.style.css";
import LodingSpinner from "../common/components/LodingSpinner";

const AppLayout = ({ children }) => {
  useEffect(() => {}, []);
  const loging = false;

  return (
    <div className="app-layout">
      <NavBar />
      {loging ? <LodingSpinner /> : children}
    </div>
  );
};

export default AppLayout;

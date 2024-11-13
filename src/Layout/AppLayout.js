import React, { useEffect } from "react";
import Navbar from "../common/components/NavBar";
import "./style/applayout.style.css";
import LodingSpinner from "../common/components/LodingSpinner";

const AppLayout = ({ children }) => {
  useEffect(() => {}, []);
  const loging = true;

  return (
    <div className="app-layout">
      <Navbar />
      {loging ? <LodingSpinner /> : { children }}
    </div>
  );
};

export default AppLayout;

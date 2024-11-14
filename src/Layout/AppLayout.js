import React, { useState} from "react";
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

  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="app-layout">
      {!isAdminPage && <NavBar toggleAlert={toggleAlert} />}
      {loging ? <LodingSpinner /> :  children }
    </div>
  );
};

export default AppLayout;
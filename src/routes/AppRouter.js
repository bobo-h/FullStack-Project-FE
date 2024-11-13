import React from "react";
import { Route, Routes } from "react-router";
import ChatbotPage from "../pages/ChatbotPage/ChatbotPage";
import MainPage from "../pages/MainPage/MainPage";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/chatbot" element={<ChatbotPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
    </Routes>
  );
};

export default AppRouter;

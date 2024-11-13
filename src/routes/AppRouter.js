import React from "react";
import { Route, Routes } from "react-router";

import ChatbotPage from "../pages/ChatbotPage/ChatbotPage";
import MainPage from "../pages/MainPage/MainPage";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/chatbot" element={<ChatbotPage/>} />
      <Route path="/" element={<ResgisterPage />} />
    </Routes>
  );
};

export default AppRouter;

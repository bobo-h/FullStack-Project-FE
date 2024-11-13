import React from "react";
import { Route, Routes } from "react-router";

import ChatbotPage from "../pages/ChatbotPage/ChatbotPage";
import MainPage from "../pages/MainPage/MainPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/chatbot" element={<ChatbotPage/>} />
    </Routes>
  );
};

export default AppRouter;

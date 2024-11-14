import React from "react";
import { Route, Routes } from "react-router";
import ChatbotPage from "../pages/ChatbotPage/ChatbotPage";
import MainPage from "../pages/MainPage/MainPage";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DiariesPage from "./../pages/DiariesPage/DiariesPage";
import DiaryDetailPage from "./../pages/DiaryDetailPage/DiaryDetailPage";
import DiaryFormPage from "./../pages/DiaryFormPage/DiaryFormPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
      <Route path="/diaries" element={<DiariesPage />} />
      <Route path="/diaries/new" element={<DiaryFormPage />} />
      <Route path="/diaries/:diaryId/edit" element={<DiaryFormPage />} />
      <Route path="/diaries/:diaryId" element={<DiaryDetailPage />} />
    </Routes>
  );
};

export default AppRouter;

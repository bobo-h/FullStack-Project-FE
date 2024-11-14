import React from "react";
import { Route, Routes } from "react-router";
import ChatbotPage from "../pages/ChatbotPage/ChatbotPage";
import MainPage from "../pages/MainPage/MainPage";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import MyPage from "../pages/MyPage/MyPage";
import ProductPage from "../pages/ProductPage/ProductPage"
import PaymentPage from "../pages/PaymentPage/PaymentPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/shop" element={<ProductPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default AppRouter;

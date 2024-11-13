import { configureStore } from "@reduxjs/toolkit";
import chatbotSlice from "./chatbot/chatbotSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    chatbot: chatbotSlice,
    user: userSlice,
  },
});

export default store;
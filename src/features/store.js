import { configureStore } from "@reduxjs/toolkit";
import chatbotSlice from "./chatbot/chatbotSlice";

const store = configureStore({
    reducer: {
        chatbot: chatbotSlice,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import chatbotSlice from "./chatbot/chatbotSlice";
import userSlice from "./user/userSlice";
import productReducer from "./product/productSlice"
import orderRecuder from "./order/orderSlice"

const store = configureStore({
  reducer: {
    chatbot: chatbotSlice,
    user: userSlice,
    product: productReducer,
    order: orderRecuder,
  },
});

export default store;

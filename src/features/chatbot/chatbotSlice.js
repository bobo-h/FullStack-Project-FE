import api from "../../utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createChatbot = createAsyncThunk(
    'chatbot/createChatbot',
    async({ name, personality }, { rejectWithValue }) => {
        try {
            const response = await api.post('/chatbot', { name, personality }); // API request
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message || '챗봇 생성 실패');
        }
    }
);

// Chatbot slice
const chatbotSlice = createSlice({
    name: "chatbot",
    initialState: {
        loading: false,
        registrationError: null,
        success: false,
    },
    reducers: {
        clearErrors: (state) => {
            state.registrationError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createChatbot.pending, (state) => {
                state.loading = true;
            })
            .addCase(createChatbot.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.registrationError = null;
            })
            .addCase(createChatbot.rejected, (state, action) => {
                state.loading = false;
                state.registrationError = action.payload;
            });
    },
});

export const { clearErrors } = chatbotSlice.actions;
export default chatbotSlice.reducer;
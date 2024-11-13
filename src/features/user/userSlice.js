import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
// 회원가입
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (
    { name, email, password, birthday, profileImage, navigate },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/user", {
        name,
        email,
        password,
        birthday,
        profileImage,
      });
      // 성공 -> 로그인 페이지로 이동
      navigate("/login");
      return response.data.data;
    } catch (error) {
      // 실패
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    loginError: null,
    registrationError: null,
    success: false,
  },
  reducers: {
    clearErrors: (state) => {
      state.loginError = null;
      state.registrationError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.registrationError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.registrationError = action.payload;
      });
  },
});
export const { clearErrors } = userSlice.actions;
export default userSlice.reducer;

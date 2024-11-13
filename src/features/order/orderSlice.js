import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

// Define initial state
const initialState = {
    orderList: [],
    orderNum: "",
    selectedOrder: {},
    error: "",
    loading: false,
    totalPageNum: 1,
    recentAddress: null,
    previousAddresses: [],

};

// Async thunks
export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (payload, { dispatch, rejectWithValue }) => {
        try {

            // 백엔드 연결 나중에 (TODO HERE!!)
            // const response = await api.post("/order", payload)
            // if (response.status !== 200) throw new Error(response.error)

            const response = {
                data: {
                    orderNum: "ORD123456", // 예시 주문 번호
                    item: {
                        id: payload.id, // 단품 상품 ID
                        name: payload.name, // 단품 상품 이름
                        imgUrl: payload.imgUrl,
                        price: payload.price, // 가격
                        
                    },
                },
            };

            return response.data.orderNum
        } catch (error) {
            const errorMessage = error.error || error.message || "주문 실패 했습니다!";
            return rejectWithValue(errorMessage)
        }

    }
);


// Order slice
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setSelectedOrder: (state, action) => {
            state.selectedOrder = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.orderNum = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export const { setSelectedOrder } = orderSlice.actions;
export default orderSlice.reducer;

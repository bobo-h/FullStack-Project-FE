import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../utils/api";

// 비동기 액션 생성
export const getProductList = createAsyncThunk(
    "products/getProductList",
    async (query, { rejectWithValue }) => {
        try {

            // 백엔드 연결 나중에 (TODO HERE!!)
            //   const response = await api.get("/product", { params: { ...query } });
            //   if (response.status !== 200) throw new Error(response.error)

            const response = {
                data: [
                    { id: "cat_no1", name: "heartNoseOrange", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423516/Cute_cat_cartoon_characters_vector_illustrations_set_1_1_wqy0gc.jpg" },
                    { id: "cat_no2", name: "heartNoseBeige", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423516/Cute_cat_cartoon_characters_vector_illustrations_set_1_2_lkrst6.jpg" },
                    { id: "cat_no3", name: "heartNoseGray", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423515/Cute_cat_cartoon_characters_vector_illustrations_set_1_0_lh3dcq.jpg" },
                    { id: "cat_no4", name: "heartNoseBrown", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423504/Cute_cat_cartoon_characters_vector_illustrations_set_0_2_ghyv1x.jpg" },
                    { id: "cat_no5", name: "heartNoseYellow", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423493/Cute_cat_cartoon_characters_vector_illustrations_set_0_1_zu7udn.jpg" },
                    { id: "cat_no6", name: "heartNoseMustard", imageUrl: "https://res.cloudinary.com/df3scssas/image/upload/v1731423480/Cute_cat_cartoon_characters_vector_illustrations_set_0_0_ms2mel.jpg" },
                ],
                totalPageNum: 1,
            };

            return response;
        } catch (error) {
            return rejectWithValue(error.error)
        }
    }
);

// 슬라이스 생성
const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        selectedProduct: null,
        loading: false,
        error: "",
        totalPageNum: 1,
        success: false,
    },
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setFilteredList: (state, action) => {
            state.filteredList = action.payload;
        },
        clearError: (state) => {
            state.error = "";
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProductList.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload.data;
            state.error = ""
            state.totalPageNum = action.payload.totalPageNum;
        })
        builder.addCase(getProductList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export const { setSelectedProduct, setFilteredList, clearError } =
    productSlice.actions;
export default productSlice.reducer;

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

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (formData, { dispatch, rejectWithValue }) => {
        try {

            // const response = await api.post("/product", formData)
            // if (response.status !== 200) throw new Error(response.error)

            // dispatch(showToastMessage({ message: "상품 생성 완료", status: "success" }))
            // dispatch(getProductList({ page: 1 }))

            return true
        } catch (error) {
            return rejectWithValue(error.error)
        }
    }
);

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async ({ id, ...formData }, { dispatch, rejectWithValue }) => {
        try {

            // const response = await api.put(`/product/${id}`, formData)
            // if (response.status !== 200) throw new Error(response.error)
            // dispatch(showToastMessage({ message: "상품 변경 완료", status: "success" }))
            // dispatch(getProductList({ page: 1 }))
            return true
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
        builder.addCase(createProduct.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.success = true; //상품 생성을 성공하면? 다이얼로그르 닫고, 실패하면? 실패 메시지를 다이얼로그에 보여주고, 닫진 않음. 

        })
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
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
        builder.addCase(editProduct.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.success = true;
        })
        builder.addCase(editProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    },
});

export const { setSelectedProduct, setFilteredList, clearError } =
    productSlice.actions;
export default productSlice.reducer;

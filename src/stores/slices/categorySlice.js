import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    category: {},
    loading: "idle",
    error: null,
};

export const fetchPostByCategory = createAsyncThunk(
    "category/fetchPostByCategory",
    async (category) => {
        const URL = `http://192.168.43.240:9000/api/news/category/${category}`;

        const response = await fetch(URL);
        return await response.json();
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPostByCategory.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchPostByCategory.fulfilled, (state, { payload }) => {
                state.category = payload;
                state.loading = "idle";
            })
            .addCase(fetchPostByCategory.rejected, (state, action) => {
                state.loading = "idle";
                state.error = action.error;
            });
    },
});

export const selectedLoading = (state) => state.category.loading;
export const selectedCategory = (state) => state.category.category;
export const categoryError = (state) => state.category.error;

export default categorySlice.reducer;

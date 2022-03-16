import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = `https://192.168.43.240:9000/api/news/popular`;

const initialState = {
    popular: {},
    loading: "idle",
    error: null,
};

export const fetchPopularNews = createAsyncThunk(
    "popular/fetchPopular",
    async () => {
        const response = await fetch(URL);
        return await response.json();
    }
);

const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchPopularNews.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchPopularNews.fulfilled, (state, action) => {
                state.popular = action.payload;
                state.loading = "idle";
            })
            .addCase(fetchPopularNews.rejected, (state, action) => {
                state.error = action.error;
                state.loading = "idle";
            });
    },
});

export const selectedLoading = (state) => state.popular.loading;
export const selectedError = (state) => state.popular.error;
export const selectedPopularNews = (state) => state.popular.popular;
export const selectedPopularNewsNumber = (state) => {
    return state.popular.popular.articles.slice(0, 3);
};

export default popularSlice.reducer;

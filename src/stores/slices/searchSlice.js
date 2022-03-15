import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../api_key";

const initialState = {
    search: {},
    loading: "idle",
    error: null,
};

export const fetchPostBySearch = createAsyncThunk(
    "search/fetchPostBySearch",
    async (value) => {
        const URL = `https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`;
        const response = await fetch(URL);
        return await response.json();
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostBySearch.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchPostBySearch.fulfilled, (state, { payload }) => {
                state.loading = "idle";
                state.search = payload;
            })
            .addCase(fetchPostBySearch.rejected, (state, action) => {
                state.loading = "idle";
                state.error = action.error;
            });
    },
});

export const selectedLoading = (state) => state.search.loading;
export const selectedError = (state) => state.search.error;
export const selectedSearch = (state) => state.search.search;

export default searchSlice.reducer;

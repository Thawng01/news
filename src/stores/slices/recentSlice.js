import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../api";

const initialState = {
    recent: {},
    error: null,
};

export const fetchRecentNews = createAsyncThunk(
    "recent/fetchRecentNews",
    async (page) => {
        const URL = `${url}/news/recent/${page}`;
        const response = await fetch(URL);
        console.log(response);
        return await response.json();
    }
);

const recentSlice = createSlice({
    name: "recent",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchRecentNews.fulfilled, (state, { payload }) => {
            state.recent = payload;
        });

        builder.addCase(fetchRecentNews.rejected, (state, { payload }) => {
            console.log(payload);
        });
    },
});

export const selectedRecentNews = (state) => state.recent.recent;
export const fetchError = (state) => state.error;
export default recentSlice.reducer;

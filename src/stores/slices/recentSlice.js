import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../api";

const initialState = {
    recent: {},
};

export const fetchRecentNews = createAsyncThunk(
    "recent/fetchRecentNews",
    async (page) => {
        const URL = `${url}/news/recent/${page}`;
        const response = await fetch(URL);
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
    },
});

export const selectedRecentNews = (state) => state.recent.recent;
export default recentSlice.reducer;

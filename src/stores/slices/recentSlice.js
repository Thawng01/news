import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../api_key";

const initialState = {
    recent: {},
};

export const fetchRecentNews = createAsyncThunk(
    "recent/fetchRecentNews",
    async (page) => {
        let hr = new Date(Date.now() - 3600 * 1000).toISOString();
        let now = new Date().toISOString();

        const URL = `https://newsapi.org/v2/everything?q=everything&from=${hr}&to=${now}&sortBy=publishedAt&pageSize=8&page=${page}&apiKey=${API_KEY}`;
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

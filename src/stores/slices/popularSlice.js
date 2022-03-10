import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../api_key";

const URL = `https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=${API_KEY}`;

const initialState = {
    popular: {},
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
        builder.addCase(fetchPopularNews.fulfilled, (state, action) => {
            state.popular = action.payload;
        });
    },
});

export default popularSlice.reducer;

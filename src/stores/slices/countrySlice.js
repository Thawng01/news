import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../api_key";

const initialState = {
    country: {},
    loading: "idle",
    error: null,
};

export const fetchPostByCountry = createAsyncThunk(
    "country/fetchPostByCountry",
    async (country) => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

        const response = await fetch(URL);

        return await response.json();
    }
);

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPostByCountry.pending, (state) => {
                state.loading = "loading";
            })

            .addCase(fetchPostByCountry.fulfilled, (state, { payload }) => {
                state.country = payload;
                state.loading = "idle";
            })
            .addCase(fetchPostByCountry.rejected, (state, action) => {
                state.loading = "idle";
                state.error = action.error;
            });
    },
});

export const selectedLoading = (state) => state.country.loading;
export const selectedCountry = (state) => state.country.country;
export const selectedError = (state) => state.country.error;

export default countrySlice.reducer;

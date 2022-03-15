import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./slices/popularSlice";
import recentReducer from "./slices/recentSlice";
import categoryReducer from "./slices/categorySlice";
import countryReducer from "./slices/countrySlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        popular: popularReducer,
        recent: recentReducer,
        category: categoryReducer,
        country: countryReducer,
        search: searchReducer,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./slices/popularSlice";
import recentReducer from "./slices/recentSlice";
import categoryReducer from "./slices/categorySlice";
import countryReducer from "./slices/countrySlice";

const store = configureStore({
    reducer: {
        popular: popularReducer,
        recent: recentReducer,
        category: categoryReducer,
        country: countryReducer,
    },
});

export default store;

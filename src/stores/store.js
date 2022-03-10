import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./slices/popularSlice";
import recentReducer from "./slices/recentSlice";

const store = configureStore({
    reducer: {
        popular: popularReducer,
        recent: recentReducer,
    },
});

export default store;

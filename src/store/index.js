import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // auth: authSlice.reducer,
        // modal,
    },
});

export default store;

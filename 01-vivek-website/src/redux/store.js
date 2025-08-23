import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "./AppSlice";

const store = configureStore({
    reducer:AppSlice.reducer
})

export default store;
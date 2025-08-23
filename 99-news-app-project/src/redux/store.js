import { configureStore } from "@reduxjs/toolkit";
import {AppSlice}  from "./AppSlice";

const store = configureStore({
    reducer:{news:AppSlice.reducer}
});

export default store;
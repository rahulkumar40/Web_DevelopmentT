import { configureStore } from "@reduxjs/toolkit";
import { CountSlice } from "./CounterSlice";

const store = configureStore({
    reducer:{
        counter:CountSlice.reducer
    },
})

export default store;
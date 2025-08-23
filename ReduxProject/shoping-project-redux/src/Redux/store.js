import CartSlice from "./CartSlice"
import {configureStore} from '@reduxjs/toolkit';
const store = configureStore({
    reducer :{ cart:CartSlice}
})

export default store;
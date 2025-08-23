import {createSlice} from '@reduxjs/toolkit'

export const AppSlice = createSlice({
    name:"news",
    initialState:[],
    reducers:{
        addNews:(state, action)=>{
            state.push(action.payload)
        },
        removeNews:(state, action)=>{
            return state.filter ( (item)=>item.id!==action.payload)
        }
    }
})

export const {addNews,removeNews}=AppSlice.actions;
export default AppSlice.reducer;
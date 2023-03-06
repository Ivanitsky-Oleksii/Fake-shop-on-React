import { createReducer, createSlice } from "@reduxjs/toolkit";
import likeReducer from "./likeReducer";


type cartType = {
    [id:number] :number
}

export const initialState:cartType = {
    1:3,
    2:3,
}

export const cartSlice = createSlice({
    name:"productsInCart",
    initialState,
    reducers:{
    addProductToCart:(state,action) =>({
        ...state,
        [action.payload.id]: (state[action.payload.id] || 0) + action.payload.count
    })

    }
})

export const {addProductToCart} = cartSlice.actions
export default cartSlice.reducer
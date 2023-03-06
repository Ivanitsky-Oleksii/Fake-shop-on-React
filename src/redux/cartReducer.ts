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
    

    }
})

// export const {addLike,removeLike} = likeSlice.actions
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { initial } from "lodash";

type likeProductsType = {
    [id:number] :boolean
}

export const initialState:likeProductsType = {
    1:true,
    4:true,
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{}
})

export default likeSlice.reducer
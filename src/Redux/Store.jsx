import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./BlogSlice";


export default configureStore({
    reducer:{
        blogs:blogReducer 
    }
})

import { createSlice } from "@reduxjs/toolkit";


function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id)
        
            return i;
    }

    return -1;
}


export const BlogSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        
        saveAllBlogs: (state, action) => {
            // console.log(state,action.payload)
            
            return action.payload; 
        },

        
        increase_cart: (state, action) => {
            
            const { id } = action.payload; 
            
            const index = findIndex(state, id); 
            
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    quantity: (state[index].quantity || 1) + 1
                };
            }
        },
        
        decrease_cart: (state, action) => {
            const { id } = action.payload;
            const index = findIndex(state, id);
            
            if (index !== -1 && state[index].quantity > 1) {
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity - 1
                };
            }
        },
        
        remove_cart: (state, action) => {
            const { id } = action.payload;
            
            return state.filter((item) => item.id !== id);
        }
    }
});


export const { saveAllBlogs, increase_cart, decrease_cart, remove_cart } = BlogSlice.actions;
export const blogReducer = BlogSlice.reducer;

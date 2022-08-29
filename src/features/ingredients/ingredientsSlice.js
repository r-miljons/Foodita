import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
    name: 'current-ingredients',
    initialState: [],
    reducers: {
        addIngredient: (state, action) => {
           state.push(action.payload);
        },
        removeIngredient: (state, action) => {
            state = state.filter(e => e !== action.payload);
            return state;
        },
        removeAll: (state) => {
            state = [];
            return state;
        },
        setIngredients: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { addIngredient, removeIngredient, removeAll, setIngredients } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
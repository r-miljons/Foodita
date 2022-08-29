import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "./Menu";

const initialState = menuItems;

export const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        sortByCategory: (state, action) => {
            return state.filter(item => item.category === action.payload)
        },
        sortByPrice: (state) => {
            return state.sort((a, b) => a.price - b.price);
        }
    }
});

export const { sortByCategory, sortByPrice } = menuSlice.actions;

export default menuSlice.reducer;

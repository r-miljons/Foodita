import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../menu/Menu";

const initialState = menuItems;

export const searchSlice = createSlice({
    name: "search-results",
    initialState: initialState,
    reducers: {
        setSearch: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
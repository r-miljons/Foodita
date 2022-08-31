import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../menu/Menu";

const menu = menuItems;

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResults: menu,
        searchTerm: '',
        searchFilter: ["All"]
    },
    reducers: {
        setResults: (state, action) => {
            state.searchResults = action.payload;
            return state;
        },
        setTerm: (state, action) => {
            state = action.payload;
            return state;
        },
        addFilter: (state, action) => {
            state.searchFilter.unshift(action.payload);
            return state;
        },
        removeFilter: (state, action) => {
            state.searchFilter = state.searchFilter.filter(item => item !== action.payload);
            return state;
        },
        resetFilter: (state, action) => {
            state.searchFilter = ["All"];
            return state;
        }
    }
});

export const { setResults, setTerm, addFilter, removeFilter, resetFilter } = searchSlice.actions;

export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
    name: 'search-term',
    initialState: '',
    reducers: {
        setTerm: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { setTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
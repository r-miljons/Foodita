import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "./Menu";

const initialState = menuItems;

export const menuSlice = createSlice({
    name: "menu",
    initialState: initialState
});

export default menuSlice.reducer;

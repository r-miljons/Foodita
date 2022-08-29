import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import searchResultsReducer from "../features/search/searchSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import ingredientsReducer from "../features/ingredients/ingredientsSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		searchResults: searchResultsReducer,
		searchTerm: searchTermReducer,
        ingredients: ingredientsReducer,
        order: orderReducer
	},
});

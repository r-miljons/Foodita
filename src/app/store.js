import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import searchReducer from "../features/search/searchSlice";
import ingredientsReducer from "../features/ingredients/ingredientsSlice";
import orderReducer from "../features/order/orderSlice";
import { saveOrderInfo } from "../features/order/orderSlice";

export const store = configureStore({
	reducer: {
		menu: menuReducer,
        ingredients: ingredientsReducer,
        order: orderReducer,
        search: searchReducer, 
	},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveOrderInfo)
});

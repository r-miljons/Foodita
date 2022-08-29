import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
	name: "order",
	initialState: localStorage.getItem("order")
		? JSON.parse(localStorage.getItem("order"))
		: { contents: [], total: 0 },
	reducers: {
		addItem: (state, action) => {
			if (
				state.contents.find((item) => item.orderID === action.payload.orderID)
			) {
				const index = state.contents.findIndex(
					(item) => item.orderID === action.payload.orderID
				);
				const stateIngredients = state.contents[index].ingredients;
				let ingredientsMatch =
					stateIngredients.length === action.payload.ingredients.length &&
					stateIngredients.every(function (element) {
						return action.payload.ingredients.includes(element);
					});
				ingredientsMatch
					? (state.contents[index].amount += action.payload.amount)
					: state.contents.push(action.payload);
			} else {
				state.contents.push(action.payload);
			}
			//side effect in each reducer
			localStorage.setItem("order", JSON.stringify(state));
		},
		calculateTotal: (state) => {
			let orderTotal = 0;
			state.contents.forEach((item) => {
				orderTotal += item.price * item.discount * item.amount;
			});
			state.total = orderTotal.toFixed(2);
			localStorage.setItem("order", JSON.stringify(state));
		},
		incrementAmount: (state, action) => {
			const index = state.contents.findIndex(
				(item) => item.orderID === action.payload
			);
			state.contents[index].amount += 1;
			localStorage.setItem("order", JSON.stringify(state));
		},
		decrementAmount: (state, action) => {
			const index = state.contents.findIndex(
				(item) => item.orderID === action.payload
			);
			if (state.contents[index].amount > 1) {
				state.contents[index].amount -= 1;
			} else if (state.contents[index].amount > 0) {
				state.contents.splice(index, 1);
			}
			localStorage.setItem("order", JSON.stringify(state));
		},
		removeAll: (state) => {
			state.contents = [];
			state.total = 0;
			localStorage.setItem("order", JSON.stringify(state));
		},
	},
});

export const {
	addItem,
	calculateTotal,
	incrementAmount,
	decrementAmount,
	removeAll,
} = orderSlice.actions;

export default orderSlice.reducer;

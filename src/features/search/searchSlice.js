import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../menu/Menu";

const menu = menuItems;

export const searchSlice = createSlice({
	name: "search",
	initialState: {
		searchResults: menu,
		searchTerm: "",
		searchFilter: {
			vegMenu: false,
			categories: ["All"],
			sortBy: {
				sortTypes: [
					"Most Expensive",
					"Least Expensive",
					"Most Popular",
					"Least Popular",
				],
				selected: "",
			},
			activeFilters: [],
		},
	},
	reducers: {
		setResults: (state, action) => {
			state.searchResults = action.payload;
			return state;
		},
		setTerm: (state, action) => {
			state.searchTerm = action.payload;
			return state;
		},
		addCategoryFilter: (state, action) => {
			state.searchFilter.categories.unshift(action.payload);
			state.searchFilter.activeFilters.push(action.payload);
			return state;
		},
		removeCategoryFilter: (state, action) => {
			state.searchFilter.categories = state.searchFilter.categories.filter(
				(item) => item !== action.payload
			);
			state.searchFilter.activeFilters =
				state.searchFilter.activeFilters.filter(
					(item) => item !== action.payload
				);
			return state;
		},
		resetCategoryFilter: (state, action) => {
			for (let x = 0; x < state.searchFilter.categories.length; x++) {
				state.searchFilter.activeFilters =
					state.searchFilter.activeFilters.filter(
						(y) => y !== state.searchFilter.categories[x]
					);
			}
			state.searchFilter.categories = ["All"];
			return state;
		},
		changeSortType: (state, action) => {
			state.searchFilter.sortBy.selected = action.payload;
			return state;
		},
		toggleVegMenu: (state, action) => {
			if (state.searchFilter.vegMenu) {
				state.searchFilter.vegMenu = false;
				state.searchFilter.activeFilters =
					state.searchFilter.activeFilters.filter((x) => x !== "Vegetarian");
			} else {
				state.searchFilter.vegMenu = true;
				state.searchFilter.activeFilters.push("Vegetarian");
			}

			return state;
		},
		addToActiveFilters: (state, action) => {
            state.searchFilter.activeFilters =
			state.searchFilter.activeFilters.filter((item) => item !== "Most Expensive" && item !== "Least Expensive" && item !== "Most Popular" && item !== "Least Popular")

            if (!state.searchFilter.activeFilters.includes(action.payload)) {
                state.searchFilter.activeFilters.push(action.payload);
            }
			return state;
		},
		removeFromActiveFilters: (state, action) => {
			state.searchFilter.activeFilters =
				state.searchFilter.activeFilters.filter(
					(item) => item !== action.payload
				);
			return state;
		},
		sortByLeastExpensive: (state) => {
			state.searchResults.sort((a, b) => a.price - b.price);
		},
		sortByMostExpensive: (state) => {
			state.searchResults.sort((a, b) => b.price - a.price);
		},
		sortByLeastPopular: (state) => {
			state.searchResults.sort((a, b) => a.rating - b.rating);
		},
		sortByMostPopular: (state) => {
			state.searchResults.sort((a, b) => b.rating - a.rating);
		},
		resetSort: (state) => {
			state.searchResults = menu;
            state.searchFilter.sortBy.selected = '';
            for (let x = 0; x < state.searchFilter.sortBy.sortTypes.length; x++) {
				state.searchFilter.activeFilters =
					state.searchFilter.activeFilters.filter(
						(y) => y !== state.searchFilter.sortBy.sortTypes[x]
					);
			}
            return state;
		},
	},
});

export const selectSortTypes = (state) =>
	state.search.searchFilter.sortBy.sortTypes;
export const selectCategories = (state) => state.search.searchFilter.categories;
export const selectedSortType = (state) =>
	state.search.searchFilter.sortBy.selected;

export const {
	setResults,
	setTerm,
	addCategoryFilter,
	removeCategoryFilter,
	resetCategoryFilter,
	changeSortType,
	toggleVegMenu,
	addToActiveFilters,
	removeFromActiveFilters,
	sortByLeastExpensive,
	sortByLeastPopular,
	sortByMostExpensive,
	sortByMostPopular,
    resetSort
} = searchSlice.actions;

export default searchSlice.reducer;

import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../utilities/getCategories";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import { sortByLeastExpensive, sortByLeastPopular, sortByMostExpensive, sortByMostPopular, resetSort, addToActiveFilters } from "../../../features/search/searchSlice";
import {
	addCategoryFilter,
	removeCategoryFilter,
	resetCategoryFilter,
	selectCategories,
	selectSortTypes,
	selectedSortType,
	toggleVegMenu,
    changeSortType
} from "../../../features/search/searchSlice";
import "./filter.css";

export function Filter() {
	const dispatch = useDispatch();
	let categories = getCategories(useSelector((state) => state.menu));
	// added 'All' category since its not a category from the menu
	categories.unshift("All");
	const filters = useSelector(selectCategories);
	const sortTypes = useSelector(selectSortTypes);
	const selectedType = useSelector(selectedSortType);
	const isMenuVeg = useSelector((state) => state.search.searchFilter.vegMenu);

	useEffect(() => {
		if (filters.length === 0) {
			dispatch(resetCategoryFilter());
		}
		if (filters.includes("All") && filters.length > 1) {
			dispatch(removeCategoryFilter("All"));
		}
	}, [filters]);

	const toggleCategoryFilter = (filter) => {
		if (filter === "All") {
			dispatch(resetCategoryFilter());
		} else if (!filters.includes(filter)) {
			dispatch(addCategoryFilter(filter));
		} else {
			dispatch(removeCategoryFilter(filter));
		}
	};

	const toggleVegetarianMenu = () => {
		dispatch(toggleVegMenu());
	};

    const handleSortType = (type) => {
        if (selectedType.includes(type)) {
            dispatch(resetSort());
        } else {
            dispatch(changeSortType(type));
            dispatch(addToActiveFilters(type));
            switch (type) {
                case "Least Expensive": dispatch(sortByLeastExpensive()); break;
                case "Most Expensive": dispatch(sortByMostExpensive()); break;
                case "Least Popular" : dispatch(sortByLeastPopular()); break;
                case "Most Popular" : dispatch(sortByMostPopular()); break;
            }
        }
    }

	return (
		<div className="hide-h-overflow">
			<div className="filter-container">
				<p className="filter-title">Categories</p>
				<div className="grid-container">
					{categories.map((category, index) => {
						return (
							<div
								className={
									filters.includes(category)
										? "filter-category filter-selected"
										: "filter-category"
								}
								key={index}
								onClick={() => toggleCategoryFilter(category)}
							>
								<p>{capitalizeFirstLetter(category)}</p>
							</div>
						);
					})}

					<div
						className={
							isMenuVeg ? "filter-category filter-selected" : "filter-category"
						}
						key="veg"
						onClick={toggleVegetarianMenu}
					>
						<p>Vegetarian</p>
					</div>
				</div>
				<p className="filter-title">Sort by</p>
				<div className="grid-container wider-grid">
					{sortTypes.map((type, index) => {
						return (
							<div
								className={
									selectedType.includes(type)
										? "filter-category filter-selected"
										: "filter-category"
								}
								key={index}
								onClick={() => {handleSortType(type)}}
							>
								<p>{capitalizeFirstLetter(type)}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

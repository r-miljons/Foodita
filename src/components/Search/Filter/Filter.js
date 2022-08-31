import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../utilities/getCategories";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import { addCategoryFilter, removeCategoryFilter, resetCategoryFilter, selectCategories, selectSortTypes, selectedSortType, toggleVegMenu } from "../../../features/search/searchSlice";
import "./filter.css";

export function Filter() {
    const dispatch = useDispatch();
	let categories = getCategories(useSelector((state) => state.menu));
    // added 'All' category since its not a category from the menu
    categories.unshift('All');
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

	const toggleFilter = (filter) => {
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
                            onClick={() => toggleFilter(category)}
                        >
                            <p>{capitalizeFirstLetter(category)}</p>
                        </div>
                    );
                })}

                 <div
                    className={
                        isMenuVeg
                        ? "filter-category filter-selected"
                        : "filter-category"
                    }
                    key='veg'
                    onClick={toggleVegetarianMenu}
                >
                    <p>Vegetarian</p>
                </div>

            </div>
            <p className="filter-title">Sort by</p>
            <div className="grid-container wider-grid">
                {
                    sortTypes.map((type, index) => {
                        return (
                            <div
                                className={
                                    sortTypes.includes(selectedType)
                                        ? "filter-category filter-selected"
                                        : "filter-category"
                                }
                                key={index}
                                
                            >
                                <p>{capitalizeFirstLetter(type)}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </div>
	);
}

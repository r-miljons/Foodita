import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../utilities/getCategories";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import { addFilter, removeFilter, resetFilter } from "../../../features/search/searchSlice";
import "./filter.css";

export function Filter() {
    const dispatch = useDispatch();
	let categories = getCategories(useSelector((state) => state.menu));
    // added 'All' category since its not a category from the menu
    categories.unshift('All');
	const filters = useSelector((state) => state.search.searchFilter);

    useEffect(() => {
        if (filters.length === 0) {
            dispatch(resetFilter());
        }
        if (filters.includes("All") && filters.length > 1) {
            dispatch(removeFilter("All"));
        }
    }, [filters]);

	const toggleFilter = (filter) => {
        if (filter === "All") {
            dispatch(resetFilter());
        } else if (!filters.includes(filter)) {
            dispatch(addFilter(filter));
        } else {
            dispatch(removeFilter(filter));
        }
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
            </div>
        </div>
        </div>
	);
}

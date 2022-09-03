import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { selectCategories, setTerm, setResults } from "../../features/search/searchSlice";
import { useSelector } from "react-redux";
import { Filter } from "./Filter/Filter";
import { filterByName } from "../../utilities/filterByName";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";
import showLess from "../../assets/icons/show-less.svg";
import './search.css';

export function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.searchTerm);
    const categoryFilters = useSelector(selectCategories);
    const activeFilters = useSelector(state => state.search.searchFilter.activeFilters);
    const [filterOpen, setFilterOpen] = useState(false);

    const handleChange = (e) => {
        dispatch(setTerm(e.target.value));
    }

    const toggleFilter = () => {
        filterOpen ? setFilterOpen(false) : setFilterOpen(true)
    }

	return (
		<div className="search-container">
            <div className="search-section">
                <div className="search-box">
                    <img className="search-icon" src={searchIcon} />
                    <input id="search" type="text" placeholder="Search our Menu..." value={searchTerm} onChange={handleChange}/>
                </div>
                <div className="filter-icon-wrap">
                    <img className="filter-icon" src={ filterOpen ? showLess : filterIcon } onClick={toggleFilter}/>
                    {
                        categoryFilters.includes("All") && activeFilters.length === 0
                        ? false : <div className="filter-counter"><p>{activeFilters.length}</p></div>
                    }
                </div>
            </div>
            {
                filterOpen? <Filter /> : false
            }
		</div>
	);
}

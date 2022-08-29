import { React } from "react";
import { useDispatch } from "react-redux";
import { setTerm } from "../../features/searchTerm/searchTermSlice";
import { useSelector } from "react-redux";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";
import './search.css';

export function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.searchTerm);

    const handleChange = (e) => {
        dispatch(setTerm(e.target.value));
    }

	return (
		<div className="search-container">
			<div className="search-box">
                <img className="search-icon" src={searchIcon} />
                <input id="search" type="text" placeholder="Search our Menu..." value={searchTerm} onChange={handleChange}/>
            </div>
            <img className="filter-icon" src={filterIcon} />
		</div>
	);
}

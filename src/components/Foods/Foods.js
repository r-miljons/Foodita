import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Category } from './Category/Category';
import { getCategories } from '../../utilities/getCategories';
import { filterByName } from '../../utilities/filterByName';
import { setResults } from '../../features/search/searchSlice';
import './foods.css';

export function Foods() {
    const searchTerm = useSelector(state => state.search.searchTerm);
    const searchResults = filterByName(useSelector((state) => state.menu), searchTerm);
    const categories = getCategories(useSelector(state => state.search.searchResults));
    const filters = useSelector(state => state.search.searchFilter);


    const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(setResults(searchResults));
	}, [searchTerm]);


    if (searchResults.length === 0) {
        return (
            <div className="no-results">
                <h2>No results for "{searchTerm}"</h2>
            </div>
        );
    }

    return (
        <div className="foods-container">
            {   
                filters.includes("All")
                ? categories.map((category, index) => {
                    return <Category category={category} key={index}/>
                })
                : filters.map((category, index) => {
                    return <Category category={category} key={index}/>
                })
            }
        </div>
    );
}
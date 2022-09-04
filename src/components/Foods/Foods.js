import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Category } from './Category/Category';
import { getCategories } from '../../utilities/getCategories';
import { filterByName } from '../../utilities/filterByName';
import { selectCategories, setResults } from '../../features/search/searchSlice';
import './foods.css';

export function Foods() {
    const searchTerm = useSelector(state => state.search.searchTerm);
    const searchResults = useSelector(state => state.search.searchResults);
    const filteredResults = filterByName(useSelector(state => state.menu), searchTerm.toLowerCase());
    // all available categories
    const categories = getCategories(useSelector(state => state.search.searchResults));
    // categories dictated by filters
    const filteredCategories = useSelector(selectCategories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setResults(filteredResults));
    },[searchTerm])

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
                filteredCategories.includes("All")
                ? categories.map((category, index) => {
                    return <Category category={category} key={index}/>
                })
                : filteredCategories.map((category, index) => {
                    return <Category category={category} key={index}/>
                })
            }
        </div>
    );
}
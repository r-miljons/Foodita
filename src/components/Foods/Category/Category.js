import { React, useEffect } from "react";
import { CardList } from "./CardList/CardList";
import { CategoryEmoji } from "./CategoryEmoji/CategoryEmoji";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import "./category.css";
import { useSelector } from "react-redux";
import { sortByCategory } from "../../../utilities/sortByCategory";
import { selectCategories } from "../../../features/search/searchSlice";

export function Category({ category }) {
	let items = useSelector((state) => state.search.searchResults);
	// in case "vegetarian" filter is selected, change the items variable to vegitarian menu
	const isMenuVeg = useSelector((state) => state.search.searchFilter.vegMenu);
	const filteredMenu = isMenuVeg ? items.filter(item => item.veg === true) : items 

	const itemsInCategory = sortByCategory(filteredMenu, category);

	return (
		<div className="category">
			<h2 className="category-title">
				{capitalizeFirstLetter(category)}
				<CategoryEmoji category={category}/>
			</h2>
			<CardList items={itemsInCategory} />
		</div>
	);
}

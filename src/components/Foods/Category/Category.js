import { React } from "react";
import { CardList } from "./CardList/CardList";
import { CategoryEmoji } from "./CategoryEmoji/CategoryEmoji";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import { useSelector } from "react-redux";
import { sortByCategory } from "../../../utilities/sortByCategory";
import "./category.css";

export function Category({ category }) {
	let items = useSelector((state) => state.search.searchResults);
	const itemsInCategory = sortByCategory(items, category);

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

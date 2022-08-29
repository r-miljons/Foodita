import { React } from "react";
import { CardList } from "./CardList/CardList";
import { capitalizeFirstLetter } from "../../../utilities/capitalizeFirstLetter";
import "./category.css";
import { useSelector } from "react-redux";
import { sortByCategory } from "../../../utilities/sortByCategory";

export function Category({ category }) {
	const items = useSelector((state) => state.searchResults);
	const itemsInCategory = sortByCategory(items, category);

	return (
		<div className="category">
			<h2 className="category-title">{capitalizeFirstLetter(category)}</h2>
			<CardList items={itemsInCategory} />
		</div>
	);
}

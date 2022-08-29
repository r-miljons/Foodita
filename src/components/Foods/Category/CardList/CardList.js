import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import "./cardlist.css";

export function CardList({items}) {
	return (
		<div className="card-list">
			{
				items.map((item) => {
					return <Card item={item} key={item.id} />;
				})
			}
		</div>
	);
}

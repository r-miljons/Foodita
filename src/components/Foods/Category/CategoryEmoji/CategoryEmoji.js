import { React, useEffect, useState } from "react";
import Twemoji from "react-twemoji";
import "./emoji.css";

export const CategoryEmoji = (props) => {
	const { category } = props;
	const [emoji, setEmoji] = useState('');

	useEffect(() => {
		switch (category) {
			case "burgers":
				setEmoji("🍔");
				break;
			case "seafood":
                setEmoji("🍣");
				break;
			case "bowls":
                setEmoji("🍲");
				break;
			case "Soft Drinks":
                setEmoji("🥤");
				break;
			case "pizza":
                setEmoji("🍕");
				break;
			case "soup":
                setEmoji("🍜");
				break;
			case "main":
                setEmoji("🍝");
				break;
			case "desserts":
                setEmoji("🧁");
				break;
		}
	}, [category]);

	return emoji ? (
		<Twemoji options={{ className: "twemoji" }} noWrapper={true}>
			<span>{emoji}</span>
		</Twemoji>
	) : (
		false
	);
};

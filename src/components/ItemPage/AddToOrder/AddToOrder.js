import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, calculateTotal } from "../../../features/order/orderSlice";
import { missingElements } from "../../../utilities/missingElements";
import addIcon from "../../../assets/icons/add.svg";
import removeIcon from "../../../assets/icons/remove.svg";
import closeIcon from "../../../assets/icons/close.svg";
import "./addToOrder.css";

export function AddToOrder(props) {
	const { id, name, price } = props;
	const [amount, setAmount] = useState(1);
	const dispatch = useDispatch();

	const ingredients = useSelector((state) => state.ingredients);
	const menu = useSelector((state) => state.menu);

	const increment = () => {
		setAmount(amount + 1);
	};

	const decrement = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	};

	// an informational message appears if user tries to order without any ingredients
	const [orderingWithoutIngredients, setOrderingWithoutIngredients] =
		useState(false);
	const [noIngredients, setNoIngredients] = useState(false);
	useEffect(() => {
		if (ingredients.length === 0) {
			setNoIngredients(true);
		} else {
			setNoIngredients(false);
		}
	}, [ingredients.length]);

	const addItemToOrder = () => {
		if (!noIngredients) {
			const itemToAdd = menu.find((item) => item.id == id);
			const copyItem = { ...itemToAdd };
			const removedIngredients = missingElements(
				itemToAdd.ingredients,
				ingredients
			);
			copyItem.ingredients = ingredients;
			copyItem.amount = amount;
			copyItem.orderID = id + "=" + removedIngredients.join("-");
			dispatch(addItem(copyItem));
			dispatch(calculateTotal());
			setOrderingWithoutIngredients(false);
		} else {
			setOrderingWithoutIngredients(true);
			setNoIngredients(false);
		}
	};

	return (
		<div className="add-order-wrap">
			<div className="pick-amount">
				<img
					className={amount > 1 ? "remove-icon" : "remove-icon grey"}
					src={removeIcon}
					onClick={() => decrement()}
				/>
				<p className="item-amount">{amount}</p>
				<img className="add-icon" src={addIcon} onClick={() => increment()} />
			</div>
			<button className="add-to-order" onClick={() => addItemToOrder()}>
				Add to Order
			</button>
			{orderingWithoutIngredients ? (
				<div className="missing-ingredients">
					<div className="missing-message-container">
						<img
							className="close-icon"
							src={closeIcon}
							alt="close"
							onClick={() => setOrderingWithoutIngredients(false)}
						/>
						<p className="missing-message">
							You have removed every single ingredient from {name}, are you sure
							you want to order just the tableware? The delivery time will be
							blazing fast, but it will still cost you{" "}
							{(price * amount).toFixed(2)} €.
						</p>
						<button
							className="green-button centered"
							onClick={() => addItemToOrder()}
						>
							Add to Order
						</button>
					</div>
				</div>
			) : (
				false
			)}
		</div>
	);
}

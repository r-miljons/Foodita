import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { missingElements } from "../../../utilities/missingElements";
import { incrementAmount } from "../../../features/order/orderSlice";
import { decrementAmount } from "../../../features/order/orderSlice";
import { calculateTotal } from "../../../features/order/orderSlice";
import addIcon from "../../../assets/icons/add.svg";
import removeIcon from "../../../assets/icons/remove.svg";
import "./orderedItems.css";

export function OrderedItems() {
    const dispatch = useDispatch();
	const order = useSelector(state => state.order)
    const menu = useSelector(state => state.menu);

    const addAmount = (orderID) => {
        dispatch(incrementAmount(orderID));
        dispatch(calculateTotal());
    }

    const removeAmount = (orderID) => {
        dispatch(decrementAmount(orderID));
        dispatch(calculateTotal());
    }

	return (
		<ul className="order-list">
			{order.contents.map((item, index) => {
                const menuItem = menu.find(x => x.id === item.id);
                const removedIngredients = missingElements(menuItem.ingredients, item.ingredients);
                const itemPrice = item.price * item.amount * item.discount;

				return <li className="ordered-item" key={index}>
                    <div className="ordered-item-flex">
                        <div className="ordered-item-text-part">
                            <p className="order-item-title">{item.name} <span className="ordered-amount">{item.amount}x</span></p>
                            {
                                removedIngredients.length > 0 ? <p className="removed-ingredients">Removed: {removedIngredients.join(", ")}</p> : false
                            }
                        </div>
                        <div className="ordered-item-price-part">
                            <p className="order-item-price">{itemPrice.toFixed(2)} €</p>
                            <div className="pick-amount order-amount">
                                <img className={item.amount > 1 ? "remove-icon-order" : "remove-icon-order grey"} src={removeIcon} onClick={() => {removeAmount(item.orderID)}}/>
                                <p className="item-amount-order">{item.amount}</p>
                                <img className="add-icon-order" src={addIcon} onClick={() => {addAmount(item.orderID)}}/>
                            </div>
                        </div>
                    </div>

                </li>
			})}
		</ul>
	);
}

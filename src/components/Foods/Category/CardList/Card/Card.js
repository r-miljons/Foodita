import { React, Link } from "react";
import { calculateDiscount } from "../../../../../utilities/calculateDiscount";
import { useNavigate } from "react-router-dom";
import starIcon from "../../../../../assets/icons/black-star-icon.svg"; 
import vegIcon from "../../../../../assets/icons/vegetarian.svg";
import "./card.css";

export function Card(props) {
	const { name, price, discount, rating, delivery, img, veg, id } = props.item;
	const discountValues = calculateDiscount(price, discount);
	const navigate = useNavigate();

	let itemImage = require("../../../../../assets/menuPictures/" + img);

	const handleClick = () => {
		navigate('/menu/item=' + id);
	}

	return (
			<div className="card-container" onClick={handleClick}>
				<div className="card-img" style={{ backgroundImage: `url(${itemImage})` }}>
					{
						discount < 1 && <p className="percent-off">{discountValues[0]}</p>
					}
					<p className="delivery-time">{delivery}</p>
				</div>
				<div className="card-title">
					<h2>{name}
						{ veg && <span className="veg-icon-wrap"><img className="veg-icon" src={vegIcon}/></span> }
					</h2>
					<div className="card-rating">
						<img className="star-icon" src={starIcon} />
						<p className="stars">{rating}</p>
					</div>
				</div>
				<div className="card-price">
					{
						discount < 1
						? <p id="price" style={{textDecoration: "line-through"}}>{price} €</p>
						: <p id="price" style={{color: "black"}}>{price} €</p>
					}
					{
						discount < 1 && <p className="card-discounted-price">{discountValues[1]} €</p>
					}
				</div>
			</div>
	);
}

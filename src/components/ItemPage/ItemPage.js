import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { calculateDiscount } from '../../utilities/calculateDiscount'; 
import { Ingredients } from './Ingredients/Ingredients';
import { AddToOrder } from './AddToOrder/AddToOrder';
import { setIngredients } from '../../features/ingredients/ingredientsSlice';
import { BackButton } from '../BackButton/BackButton';
import starIcon from "../../assets/icons/black-star-icon.svg"
import vegIcon from "../../assets/icons/vegetarian.svg";
import './itemPage.css';

export function Item(props) {
    const { id } = useParams();
    const menu = useSelector(state => state.menu);
    const itemToRender = menu.find(item => item.id == id);
    const { name, price, discount, rating, delivery, ingredients, description, img, veg } = itemToRender;
    const discountValues = calculateDiscount(price, discount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIngredients(ingredients));
    }, []);
    
    const itemImage = require("../../assets/bigPictures/" + img);

    return (
        <div className="item-page-container">
            <BackButton />
            <div className="item-image-container" style={{ backgroundImage: `url(${itemImage})` }}>
                <div className="item-rating">
                    <img className="star-icon-item" src={starIcon} />
					<p className="stars">{rating}</p>
				</div>
                <p className="delivery-time prep-time">{delivery}</p>
            </div>
            <div className="item-title">
                <div className="name-wrap">
                    <h1 className='item-name'>{name}
                        { veg && <span className="veg-icon-wrap"><img className="veg-icon bigger-veg" src={vegIcon}/></span> }
                    </h1>
                </div>
                <div className="card-price item-price">
					{
						discount < 1
						? <p className='bigger-price-discounted' style={{textDecoration: "line-through"}}>{price} €</p>
						: <p className='bigger-price-discounted' style={{color: "black"}}>{price} €</p>
					}
					{
						discount < 1 && <p className="card-discounted-price bigger-price">{discountValues[1]} €</p>
					}
			</div>
            </div>
            <div className="flex-around">
                <Ingredients itemIngredients={ingredients}/>
                <div>
                    <p className="item-description">{description}</p>
                    <AddToOrder id={id} name={name} price={price*discount}/>
                </div>
                
            </div>
        </div>
    );
}
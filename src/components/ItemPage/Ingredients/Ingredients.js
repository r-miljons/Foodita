import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient, addIngredient } from '../../../features/ingredients/ingredientsSlice';
import checkMark from "../../../assets/icons/check-mark.svg";
import './ingredients.css';

export function Ingredients(props) {
    const ingredients = props.itemIngredients;
    const currentIngredients = useSelector(state => state.ingredients);
    const dispatch = useDispatch();

    return (
        <ul className="ingredients-list">
            {
                ingredients.map(ingredient => {
                    let ingredientPresent = currentIngredients.includes(ingredient);

                    return <li className={ingredientPresent? "ingredient" : "ingredient disabled"} 
                                key={ingredient + "listed"}
                                onClick={() => { ingredientPresent? dispatch(removeIngredient(ingredient)) : dispatch(addIngredient(ingredient)) }}
                            >
                            <p>{ingredient}</p>
                            <div className={ingredientPresent? "selected-ingredient" : "selected-ingredient unchecked"}>
                                <img className={ingredientPresent? "check-mark" : "check-mark none"} src={checkMark}/>
                            </div>
                        </li>
                })
            }
        </ul>
    );
}
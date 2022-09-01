import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderedItems } from './OrderedItems/OrderedItems';
import { Link, useNavigate } from 'react-router-dom';
import { removeAll } from '../../features/order/orderSlice';
import { BackButton } from '../BackButton/BackButton';
import "./order.css";


export function Order() {
    const [userOrdered, setUserOrdered] = useState(false);
    const order = useSelector(state => state.order);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOrder = () => {
        setUserOrdered(true);
    }

    const handleBack = () => {
        dispatch(removeAll());
        navigate("/menu");
    }

    return (
        <div className="order-page-container">
            <div className="order-wrap">
                <BackButton/>
            <h1 className="your-order-title">Your Order</h1>
            {
                order.contents.length === 0 
                ? <div className="empty-order"><h2>Your order is empty, head over to our <Link to={"/menu"}>Menu</Link> to order your food!</h2></div>
                : <OrderedItems />
            }
            <div className="order-total">
                <p className="total-text">Total: </p>
                <p className="total-sum">{order.total} €</p>
            </div>
            <button className={order.contents.length === 0? "green-button centered cant-order" : "green-button centered"} onClick={handleOrder}>ORDER</button>
            {
                userOrdered
                ? <div className="order-success">
                    <div className="order-success-message-container">
                        <h3>Success!</h3>
                        <p className='success-message'>
                            Our kitchen staff has recieved your order.
                        </p>
                        <button className='green-button centered' onClick={handleBack}>Back To Menu</button>
                    </div>
                </div>
                : false
            }
            </div>
        </div>
    );
}
import { React } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./orderButton.css";


export function OrderButton() {
    const navigate = useNavigate();
    const order = useSelector(state => state.order);

    const handleClick = () => {
        navigate("/order");
    };

    return (
        <div className="order-container-displacement">
            <div className="order-container">
                <button className="view-order" onClick={handleClick}>View Order {order.total} €</button>
            </div>
        </div>
    );
}
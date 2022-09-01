import { React } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { OrderButton } from "../Order/OrderButton/OrderButton";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import "./layout.css"

export function Layout() {
    const order = useSelector(state => state.order);
    const location = useLocation();

    return (
        <div className="layout-wrapper">
            <Navigation />
            <Outlet />
            <Footer />
            { order.contents.length > 0 && location.pathname != '/order' ? <OrderButton/> : false }
        </div>
            
    );
}
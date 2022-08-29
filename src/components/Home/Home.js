import { React } from "react";
import { Link } from "react-router-dom";
import './home.css';


export function Home() {
    return (
        <div className="home-container">
            <Link to={'/menu'}>Go to Menu</Link>
        </div>
    );
}
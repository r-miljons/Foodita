import { React } from "react";
import { Search } from "../Search/Search";
import { Foods } from "../Foods/Foods";
import './menuComponent.css';


export function Menu() {
    return (
        <div className="menu-container">
            <Search />
            <Foods />
        </div>
    );
}
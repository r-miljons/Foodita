import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import navLogo from "../../assets/homePage/foodita.svg"
import "./navigation.css";

export function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="navigation">
            <img className='nav-logo' src={navLogo} alt="nav logo" onClick={() => navigate("/")}/>
            <div className='nav-items'>
                <div className="nav-item" onClick={() => navigate("/")}><p>Home</p></div>
                <div className="nav-item" onClick={() => navigate("/menu")}><p>Menu</p></div>
                <div className="nav-item"><p>Carrers</p></div>
                <div className="nav-item"><p>About</p></div>
            </div>
        </nav>
    );
}
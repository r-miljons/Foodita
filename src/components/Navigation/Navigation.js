import { React, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import navLogo from "../../assets/homePage/foodita.svg"
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import "./navigation.css";

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const nodeRef = useRef(null);
    const navigate = useNavigate();

    return (
        <nav className="navigation">
            <img className='nav-logo' src={navLogo} alt="nav logo" onClick={() => navigate("/")}/>
            <div className='nav-items'>
                <div className="nav-item" onClick={() => navigate("/")}><p>Home</p></div>
                <div className="nav-item" onClick={() => navigate("/menu")}><p>Menu</p></div>
                <div className="nav-item" onClick={() => navigate("/careers")}><p>Careers</p></div>
                <div className="nav-item" onClick={() => navigate("/about")}><p>About</p></div>
                <div className="menu-button nav-item" onClick={() => setMenuOpen(!menuOpen)}><img className='menu-icon' src={hamburger} alt="menu-button"/></div>
            </div>
                <CSSTransition
                    in={menuOpen}
                    nodeRef={nodeRef}
                    unmountOnExit
                    timeout={300}
                    classNames="mobile-menu"
                >
                    <div className="mobile-menu-container" ref={nodeRef}>
                        <div className="menu-button nav-item" onClick={() => setMenuOpen(!menuOpen)}><img className='menu-icon' src={close} alt="menu-button"/></div>
                        <div className="item-wrap">
                            <div className="nav-item mobile" onClick={() => {navigate("/"); setMenuOpen(false)}}><p>Home</p></div>
                            <div className="nav-item mobile" onClick={() => {navigate("/menu"); setMenuOpen(false)}}><p>Menu</p></div>
                            <div className="nav-item mobile" onClick={() => {navigate("/careers"); setMenuOpen(false)}}><p>Careers</p></div>
                            <div className="nav-item mobile" onClick={() => {navigate("/about"); setMenuOpen(false)}}><p>About</p></div>
                        </div>
                    </div>
                </CSSTransition>
        </nav>
    );
}
import { React } from "react";
import "./footer.css"
import logo from "../../assets/icons/foodita-logo.svg"
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

export function Footer() {
    return (
        <footer>
            <div className="logo-copyright">
                <img src={logo} alt="foodita-logo"/>
                <p>Copyright © Foodita 2022. All Rights Reserved.</p>
            </div>
            <div className="socials">
                <img src={facebook} alt="facebook-logo"/>
                <img src={twitter} alt="twitter-logo"/>
                <img src={instagram} alt="instagram-logo"/>
            </div>
        </footer>
            
    );
}
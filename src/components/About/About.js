import { React } from 'react';
import mapPin from "../../assets/homePage/map-pin.png";
import "./about.css";

export function About() {
    const openHoursImg = require("../../assets/homePage/open-hours.jpg");
    const mapImg = require("../../assets/homePage/map.jpg");

    return (
        <div className='about-container'>
            <div className="about">
                <div className="open-times-container" style={{backgroundImage: `url(${openHoursImg})`}}>
                    <h1>Experience the best food at Foodita.</h1>
                    <div className="open-times">
                        <h2>Open Hours:</h2>
                        <ul>
                            <li>Mon-Thu: 9:00-23:00</li>
                            <li>Fri-Sat: 9:00-00:00</li>
                            <li>Sun: 9:00-23:00</li>
                        </ul>
                    </div>
                </div>
                <div className="location-container">
                    <div className="address-wrap">
                        <h2 className="location-title">Address:</h2>
                        <p>Foodita Restaurant SIA<br/>
                        Street: Lacplesa, bld. 52/54<br/>
                        City:  Riga<br/>
                        Phone number:  +371(67)28-87-60
                        </p>
                        <button className="green-button">Show in Maps</button>
                    </div>
                    <div className="location-map" style={{backgroundImage: `url(${mapImg})`}}>
                        <img className='map-pin' src={mapPin}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
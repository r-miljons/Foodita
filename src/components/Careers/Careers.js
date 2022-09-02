import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./careers.css";
import { Form } from "./Form/Form";

export function Careers() {
    const formImg = require("../../assets/homePage/form.jpg");
    const [isSubmited, setIsSubmited] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [isSubmited]);


	return <div className="careers-container">
        <section className="apply-section">
            <div className="apply-banner">
                <div className="apply-img" style={{backgroundImage: `url(${formImg})`}}></div>
                <div className="apply-text-container">
                    {
                        isSubmited
                        ? <div className="apply-text">
                            <h1>Thank you!</h1>
                            <p className="margin-bottom">You have successfully submitted your application, we will get back to you soon.</p>
                            <button className="green-button submit-button" onClick={() => {navigate("/menu")}}>Explore our menu</button>
                        </div>
                        : <div className="apply-text">
                        <h1>Join our Team!</h1>
                        <p>Looking for a great place to work and to grow your professional skillset? Foodita is the place to be. <b>Fill out our application form</b> and we'll get back to you soon.</p>
                        <p className="required-text">* Required</p>
                    </div>
                    }

                </div>
            </div>
            { isSubmited ? false : <Form submitForm={setIsSubmited}/> }
        </section>
    </div>;
}

import { React, useState } from 'react';
import "./form.css";

export function Form({submitForm}) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(true);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-block">
                <label htmlFor="role">What is your speciality? <span className="required">*</span></label><br/>
                <select id="role" required>
                    <option value="Waitress" >Waitress</option>
                    <option value="Chef">Chef</option>
                    <option value="Cook">Cook</option>
                    <option value="Dishwasher">Dishwasher</option>
                    <option value="Manager">Manager</option>
                    <option value="Bartender">Bartender</option>
                </select>
            </div>
            <div className="form-block">
                <label htmlFor="name">Name: <span className="required">*</span></label><br/>
                <input type="text" id="name" value={name} className="form-input" onChange={(e) => setName(e.currentTarget.value)} required/>
            </div>
            <div className="form-block">
                <label htmlFor="name" className="label">Surname: <span className="required">*</span></label><br/>
                <input type="text" id="name" value={surname} className="form-input" onChange={(e) => setSurname(e.currentTarget.value)} required/>
            </div>
            <div className="form-block">
                <label htmlFor="name">E-mail: <span className="required">*</span></label><br/>
                <input type="email" id="name" value={email} className="form-input" onChange={(e) => setEmail(e.currentTarget.value)} required/>
            </div>
            <div className="form-block">
                <label htmlFor="name">Phone: <span className="required">*</span></label><br/>
                <input type="tel" id="name" value={phone} className="form-input" onChange={(e) => setPhone(e.currentTarget.value)} required/>
            </div>
            <div className="form-block">
                <p className="resume-label">Upload your resume: <span className="required">*</span></p>
                <label htmlFor="resume" id="resume-upload">Choose File</label>
                <input type="file" id="resume" name="resume"/>
            </div>
            <div className="form-block">
                <label htmlFor="discovered">How did you find out about us?</label><br/>
                <select id="discovered">
                    <option value="Social Media" >Social Media</option>
                    <option value="News Paper">News Paper</option>
                    <option value="News Paper">Bus Stop</option>
                    <option value="News Paper">Workplace</option>
                    <option value="News Paper">Television</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <input type="submit" className="green-button submit-button" value="Apply"/>
        </form>
    );
}
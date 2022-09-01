import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowBack from "../../assets/icons/arrow-back.svg";

export function BackButton() {
    const navigate = useNavigate();

    return (
        <div className='back-button' onClick={() => {navigate(-1)}}>
            <img className='arrow-back' src={arrowBack} alt="arrow back"/>
            <p>Go Back</p>
        </div>
    );
}
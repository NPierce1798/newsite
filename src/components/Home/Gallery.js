import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../../App.css';
import ja from '../../images/justask.png'
import bb from '../../images/bravoburrito.png'
import { useActionData } from "react-router-dom";

const images = [
    ja,
    bb
];

function Gallery() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="gallery__container">

            <div className="gallery__row">
                <button className="gallery_button" onClick={handlePrevClick}><ArrowBackIosIcon sx={{'color':'rgb(108, 194, 216)'}} /></button>
                <img src={images[currentIndex]} className="gallery__image"/>
                <button className="gallery_button" onClick={handleNextClick}><ArrowBackIosIcon sx={{'transform': 'scaleX(-1)', 'color':'rgb(108, 194, 216)'}} /></button>
                <div className="gallery__text-container">
                    <h4 className="gallery__heading">See Some Of My Projects</h4>
                    <p className="gallery__p">From AI Assitants, to websites for resturaunts, take a look at some examples of my work.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Gallery;
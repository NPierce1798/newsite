import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../App.css';

function Heading() {
    return (
        <div className='heading__content-container'>

            <div className="heading__row">
                <div className='heading__h1'>
                    <h1>Software Developer</h1>
                </div>
                <div className='heading__p'>
                Transforming ideas into innovative software solutions
                </div>
            </div>
            <div className="heading__row">
                <a href='https://www.linkedin.com/in/nicolas-pierce'><button className="heading__button">Contact Me</button></a>
                <a href='https://www.linkedin.com/in/nicolas-pierce'>
                    <LinkedInIcon  sx={{ 
                        fontSize: 40, 
                        color: 'rgb(108, 194, 216)', 
                        margin: '10px' 
                        }} />
                </a>
            </div>

        </div>
    );
}

export default Heading;
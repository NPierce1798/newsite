import React from "react";
import '../../App.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import me from '../../images/profpic.jpg';

function About () {
    return (
        <div className="about__container">
            <div className="about__row">
                <div className="about__text-container">
                    <h4 style={{'margin-bottom':'0px', 'color':'rgb(108, 194, 216)', 'borderBottom': 'solid 1px white', 'width':'fit-content'}}>About Me</h4>
                    <h5 style={{'margin-top':'0px'}}>Nicolas Pierce</h5>
                    <p>My name is Nicolas Pierce, I am a dedicated Full Stack Developer with over three years of experience in building and deploying robust web applications. My expertise spans a diverse tech stack, including Python, Django, JavaScript, React.js, and SQL, as well as cloud technologies like AWS and containerization with Docker. I thrive on solving complex problems, continuously learning new technologies, and leading projects from inception to successful delivery. I’m driven by the challenge of turning ideas into functional, user-friendly solutions.</p>
                </div>
                <img src={me} className="about__image" alt="self-portrait"/>
            </div>
            <h4 className="about__contact-head">Feel free to <a href='https://www.linkedin.com/in/nicolas-pierce' style={{'textDecoration':'none'}}><span style={{'color':'rgb(100, 200, 250)'}}>Contact Me</span></a> with any inquiries</h4>
            <p className="about__contact-p"><EmailIcon /> Email: npierce1798@gmail.com</p>
            <a href='https://www.linkedin.com/in/nicolas-pierce' style={{'textDecoration':'none','alignSelf':'center'}}><p className="about__contact-p"><LinkedInIcon />LinkedIn: Nicolas Pierce</p></a>
        </div>
    );
}

export default About;
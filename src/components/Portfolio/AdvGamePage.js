import React from "react";
import './AdvGame.css';
import '../../App.css'

import Navbar from "../Navbar"
import AdvGame from "./AdvGame";

function GamePage () {
    return (
        <div className="App">
            <Navbar />
            <AdvGame />
            <div className="adv-game__container">
                <h4 className='adv-game__heading'>How To Play</h4>
                <p>1. Enter your character name, background, and desired time and place for the story to take place. You can leave "Plot" empty and see where the story goes!</p>
                <p>2. Select "Create" and the story will begin.</p>
                <p>3. When the story generates, it will appear below the "Create" button along with a "Next Action" text field and "Next" button.</p>
                <p>4. Enter your next action, click the "Next" button, and the story will continue. Repeat to continue the story!</p>
            </div>
            <div className="adv-game__container">
                <h4 className="adv-game__heading">About The Game</h4>
                <h5 className="adv-game__sub-heading">Development Overview</h5>
                <p>The concept for this game was inspired by openworld, decision heavy games such as Skyrim. I was also aiming to include a generative aspect to keep the experience fresh and lenient.</p>
                <p>The game was developed using Python and Django, with a PostgreSQL database. This website acts as the frondent, and was build with React. It follows a client-server architecture, in which the frontend communicates with the backend via RESTful APIs.</p>
                <h5 className="adv-game__sub-heading">Features & Functionality</h5>
                <p>With a turn-based system, players make decisions that affect the story as it unfolds. OpenAI's GPT-3.5 model is used for dynamic generation based on player actions.</p>
                <h5 className="adv-game__sub-heading">Deployment</h5>
                <p>Example: "The game is deployed on AWS using Elastic Beanstalk for the backend and S3 for static content. The frontend is served through CloudFront."</p>
                <h5 className="adv-game__sub-heading">Future Features</h5>
                <p>Future updates will include a four person multiplayer room where four characters will be able to interact and make decisions affecting the game. Share-able storylines will also be added, as well as potentially a text to speech feature which will read the story to you.</p>
            </div>
        </div>
    );
}

export default GamePage;